/*:
	Layout is a list of configurations to be applied
		when the following happens:

		1. The layout adjustment was fired.
		2. A layout was adjusted.
		3. A layout adjustment was added.
		4. A layout adjustment was deleted.
		5. A layout adjustment was disabled.
		6. A layout adjustment was enabled.

	Thus, this is composed of layout adjustments in this format.

		{
			"name": String,
			"element": jQuery,
			"priority": Number,
			"exceptions": [ String ],
			"top": "String",
			"left": "String",
			"bottom": "String",
			"right": "String",
			
			Width and height are usually in percentage.
				or auto.
			"width": "String",
			"height": "String",
			"zIndex": "String"
		}

	Layouts are then adjusted based on priority and exceptions.
	Lower priorities are affected by higher priorities and are thus
		re-adjusted if and only if they are not an exception.

	An app is made of view or so what we call "looks".

	An app has a default single look. And a look is made of layout
		adjustments.

	Layouts with negative priorities are disabled layouts.

	@todo:
		Layout with zero priority is the containing layout.
	@end-todo
*/
var Layout = function Layout( adjustment ){
	if( this instanceof Layout ){
		this.adjustment = adjustment;

		this.level = adjustment.priority;

		this.register( );
	
	}else{
		return new Layout( adjustment );
	}
};

harden.bind( Layout )
	( "LAYOUT_MOVEMENTS", {
		"left": true,
		"right": true,
		"bottom": true,
		"top": true
	} );

harden.bind( Layout )
	( "LAYOUT_SIZES", {
		"width": true,
		"height": true
	} );

harden.bind( Layout )
	( "LAYOUT_PROPERTIES", {
		"width": true,
		"height": true,
		"left": true,
		"right": true,
		"bottom": true,
		"top": true,
		"zIndex": true
	} );

harden.bind( Layout )( "looks", { } );

Layout.prototype.looks = Layout.looks;

// This is the root look.
Layout.looks[ 0 ] = [ ];

// We create a current object.
harden.bind( Layout )( "current", { } )
Layout.prototype.current = Layout.current;

// Then we can add the current look here.
Layout.current.look = Layout.looks[ 0 ];

Layout.prototype.move = function move( movement, value ){
	if( !Layout.LAYOUT_MOVEMENTS[ movement ] ){
		throw new Error( "invalid layout movement" );
	}

	if( value ){
		this.adjustment[ movement ] = value.toString( )
			.replace( /^\d+/, "$&px" );

		return this;

	}else{
		return parseInt( this.adjustment[ movement ].match( /^\d+/ )[ 0 ] );
	}
};

Layout.prototype.resize = function resize( size, value ){
	if( !Layout.LAYOUT_SIZES[ size ] ){
		throw new Error( "invalid layout size" );
	}

	if( value &&
		( /^\d+\%$|^auto$/ ).test( value ) )
	{
		this.adjustment[ size ] = value;

		return this;
	
	}else if( !value &&
		( /^\d+\%$|^auto$/ ).test( this.adjustment[ size ] ) )
	{
		return this.adjustment[ size ];
	}

	if( value ){
		this.adjustment[ size ] = value.toString( )
			.replace( /^\d+/, "$&px" );

		return this;

	}else{
		return parseInt( this.adjustment[ size ].match( /^\d+/ )[ 0 ] );
	}
};

Layout.prototype.priority = function priority( value ){
	if( value ){
		this.adjustment.priority = value;
		
		this.level = value;

		this.adjust( );

		return this;

	}else{
		return this.level;	
	}
};

Layout.prototype.left = function left( value ){
	return this.move( "left", value );
};

Layout.prototype.right = function right( value ){
	return this.move( "right", value );
};

Layout.prototype.top = function top( value ){
	return this.move( "top", value );
};

Layout.prototype.bottom = function bottom( value ){
	return this.move( "bottom", value );
};

Layout.prototype.width = function width( value ){
	return this.resize( "width", value );
};

Layout.prototype.height = function height( value ){
	return this.resize( "height", value );
};

Layout.prototype.zIndex = function zIndex( value ){
	if( value ){
		this.adjustment.zIndex = value.toString( )
			.replace( /^\d+/, "$&" );

		return this;

	}else{
		return parseInt( this.adjustment[ size ].match( /^\d+/ )[ 0 ] );
	}
};

Layout.prototype.register = function register( ){
	this.current.look.push( this );

	this.adjust( );
};

Layout.prototype.adjust = function adjust( ){
	var look = _( this.current.look )
		.sortBy( "level" );

	look.each( function onEachLayout( layout ){
		var target = layout;

		//: Negative priorities are disabled adjustments.
		if( target.priority( ) < 0 ){
			return;
		}

		look.each( function onEachLayout( layout ){
			//: Negative priorities are disabled adjustments.
			if( layout.priority( ) < 0 ){
				return;
			}

			//: Same adjustments will not be analyzed.
			if( _.isEqual( target.adjustment, layout.adjustment ) ){
				return;
			}

			//: Adjustments with leveled or less priority will not be analyzed.
			if( target.priority( ) <= adjustment.priority( ) ){
				return;
			}

			if( "left" in target && 
				target.left == "0px" &&
				"width" in target &&
				( /^\d+px$/ ).test( target.width ) &&
				parseInt( target.width.match( /^\d+/ )[ 1 ] ) > 0 )
			{
				if( "left" in adjustment ){
					adjustment.left = target.width;
				}
			}

			if( "right" in target && 
				target.right == "0px" &&
				"width" in target &&
				( /^\d+px$/ ).test( target.width ) &&
				parseInt( target.width.match( /^\d+/ )[ 1 ] ) > 0 )
			{
				if( "right" in adjustment ){
					adjustment.right = target.width;
				}
			}

			if( "top" in target && 
				target.top == "0px" &&
				"height" in target &&
				( /^\d+px$/ ).test( target.height ) &&
				parseInt( target.height.match( /^\d+/ )[ 1 ] ) > 0 )
			{
				if( "top" in adjustment ){
					adjustment.top = target.height;
				}
			}

			if( "bottom" in target && 
				target.bottom == "0px" &&
				"height" in target &&
				( /^\d+px$/ ).test( target.height ) &&
				parseInt( target.height.match( /^\d+/ )[ 1 ] ) > 0 )
			{
				if( "bottom" in adjustment ){
					adjustment.bottom = target.height;
				}
			}

			if( "left" in target && 
				parseInt( target.left.match( /^\d+/ )[ 1 ] ) > 0 &&
				"width" in target &&
				( /^\d+px$/ ).test( target.width ) &&
				parseInt( target.width.match( /^\d+/ )[ 1 ] ) > 0 )
			{
				if( "left" in adjustment ){
					adjustment.left = [
						( parseInt( target.left.match( /^\d+/ )[ 1 ] ) + 
							parseInt( target.width.match( /^\d+/ )[ 1 ] ) ),
						"px" 
					].join( "" );
				}
			}
		} );
	} );
};

Layout.prototype.resolveValue = function resolveValue( name, value ){
	if( !Layout.LAYOUT_PROPERTIES[ name ] ){
		throw new Error( "invalid layout property" );
	}

	if( ( /^\d+\%$|^auto$/ ).test( value ) ){
		return value;
	}

	value = value || ( this[ name ]( ) + 1 );

	if( typeof value == "number" &&
	 	value < 0 )
	{
		value = Math.abs( this[ name ]( ) - value );
	}

	return value;
}

Layout.prototype.moveLeft = function moveLeft( name, value ){
	this.left( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.moveRight = function moveRight( name, value ){
	this.right( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.moveUp = function moveUp( name, value ){
	this.top( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.moveDown = function moveDown( name, value ){
	this.bottom( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.moveFront = function moveFront( name, value ){
	this.zIndex( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.moveBack = function moveBack( name, value ){
	this.zIndex( this.resolveValue( name, value ) );

	this.adjust( );

	return this;
};

Layout.prototype.enable = function enable( ){
	this.adjustment.priority = Math.abs( this.adjustment.priority );

	this.adjust( );

	return this;
};

Layout.prototype.disable = function disable( ){
	this.adjustment.priority = this.adjustment.priority * -1;

	this.adjust( );

	return this;
};

