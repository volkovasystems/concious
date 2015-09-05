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

		Support for adjusting layout properties with percentage values.
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
	( "LAYOUT_VALUE_TYPES", {
		"pixel": /^\d+px$/,
		"percentage": /^\d+\%$/,
		"auto": /^auto$/ 
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

//: This is the collection of looks.
harden.bind( Layout )( "looks", { } );
Layout.prototype.looks = Layout.looks;

// This is the root look.
Layout.looks[ 0 ] = [ ];

// We create a current object.
harden.bind( Layout )( "current", { } )
Layout.prototype.current = Layout.current;

// Then we can add the current look here.
Layout.current.look = Layout.looks[ 0 ];

/*:
	Generally, we are permitting a move to be in
		percentage value or auto.

	BUT! This should not be applied as much as possible.

	We want strict pixel values for every move as much as possible.

	We only did this because we will support for 
		backward compatibility and simplicity of procedures
		of other functions.

	resolveValue requires accepting percentage, auto and pixel values.
*/
Layout.prototype.move = function move( movement, value ){
	if( !Layout.LAYOUT_MOVEMENTS[ movement ] ){
		throw new Error( "invalid layout movement" );
	}

	if( value &&
		( /^\d+\%$|^auto$/ ).test( value ) )
	{
		this.adjustment[ movement ] = value;

		return this;
	}

	var thisValue = this.adjustment[ movement ];
	if( !value &&
		( /^\d+\%$|^auto$/ ).test( thisValue ) )
	{
		return thisValue;
	}

	if( value ){
		this.adjustment[ movement ] = value.toString( )
			.replace( /^\d+/, "$&px" );

		return this;

	}else{
		if( !( movement in this.adjustment ) ){
			return null;
		}

		return parseInt( thisValue.match( /^\d+/ )[ 0 ] );
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
	}

	var thisValue = this.adjustment[ size ];
	if( !value &&
		( /^\d+\%$|^auto$/ ).test( thisValue ) )
	{
		return thisValue;
	}

	if( value ){
		this.adjustment[ size ] = value.toString( )
			.replace( /^\d+/, "$&px" );

		return this;

	}else{
		if( !( size in this.adjustment ) ){
			return null;
		}

		return parseInt( thisValue.match( /^\d+/ )[ 0 ] );
	}
};

Layout.prototype.priority = function priority( value ){
	if( value ){
		this.adjustment.priority = value;
		
		//: The level is a private value alias property for priority.
		//: This is exposed outside so that we can sort it by level.
		this.level = value;

		this.adjust( );

		return this;

	}else{
		return this.adjustment.priority;	
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
		if( target.isDisabled( ) ){
			return;
		}

		look.each( function onEachLayout( layout ){
			//: Negative priorities are disabled adjustments.
			if( layout.isDisabled( ) ){
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

			if( target.isAnchoredLeft( ) &&
				target.hasWidth( ) &&
				target.hasPixelValueWidth( ) )
			{
				if( layout.hasLeft( ) ){
					layout.left( target.width( ) );
				}
			}

			if( target.isAnchoredRight( ) &&
				target.hasWidth( ) &&
				target.hasPixelValueWidth( ) )
			{
				if( layout.hasRight( ) ){
					layout.right( target.width( ) );
				}
			}

			if( target.isAnchoredTop( ) &&
				target.hasHeight( ) &&
				target.hasPixelValueHeight( ) )
			{
				if( layout.hasTop( ) ){
					layout.top( target.height( ) );
				}
			}

			if( target.isAnchoredBottom( ) &&
				target.hasHeight( ) &&
				target.hasPixelValueHeight( ) )
			{
				if( layout.hasBottom( ) ){
					layout.bottom( target.height( ) );
				}
			}

			if( "left" in target && 
				parseInt( target.left.match( /^\d+/ )[ 1 ] ) > 0 &&
				target.hasWidth &&
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

	//: If value is percentage or auto.
	if( ( /^\d+\%$|^auto$/ ).test( value ) ){
		return value;
	}

	//: If value is not in percentage and auto.
	var oldValue = this[ name ]( ) || 0
	value = value || ( oldValue + 1 );

	//: If value is negative.
	if( typeof value == "number" &&
	 	value < 0 )
	{
		value = Math.abs( oldValue + value );
	}

	return value;
};

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

Layout.prototype.isDisabled = function isDisabled( ){
	return this.adjustment.priority < 0;
};

Layout.prototype.isEnabled = function isEnabled( ){
	return this.adjustment.priority > 0;
};

Layout.prototype.checkValueType = function checkValueType( property, type ){
	if( !Layout.LAYOUT_PROPERTIES[ property ] ){
		throw new Error( "invalid layout property" );
	}

	if( !Layout.LAYOUT_VALUE_TYPES[ type ] ){
		throw new Error( "invalid value type" );
	}

	return ( Layout.LAYOUT_VALUE_TYPES[ type ] )
		.test( this.adjustment[ property ] );
};

Layout.prototype.isPixelValue = function isPixelValue( property ){
	return this.checkValueType( property, "pixel" );
};

Layout.prototype.hasMovement = function hasMovement( movement ){
	if( !Layout.LAYOUT_MOVEMENTS[ movement ] ){
		throw new Error( "invalid layout movement" );
	}

	return ( movement in this.adjustment );
};

Layout.prototype.hasSize = function hasSize( size ){
	if( !Layout.LAYOUT_SIZES[ size ] ){
		throw new Error( "invalid layout size" );
	}

	return ( size in this.adjustment );
};

Layout.prototype.hasLeft = function hasLeft( ){
	return this.hasMovement( "left" );
};

Layout.prototype.isAnchoredLeft = function isAnchoredLeft( ){
	return sive( this.hasLeft( ),
		this.left( ) === 0,
		!this.hasRight( ) );
};

Layout.prototype.isPixelValueLeft = function isPixelValueLeft( ){
	return this.isPixelValue( "left" );
};

Layout.prototype.hasPixelValueLeft = function hasPixelValueLeft( ){
	return sive( this.hasLeft( ),
		this.isPixelValueLeft( ),
		this.left( ) > 0 );
};

Layout.prototype.hasRight = function hasRight( ){
	return this.hasMovement( "right" );
};

Layout.prototype.isAnchoredRight = function isAnchoredRight( ){
	return sive( this.hasRight( ),
		this.right( ) === 0,
		!this.hasLeft( ) );
};

Layout.prototype.isPixelValueRight = function isPixelValueRight( ){
	return this.isPixelValue( "right" );
};

Layout.prototype.hasPixelValueRight = function hasPixelValueRight( ){
	return sive( this.hasRight( ),
		this.isPixelValueRight( ),
		this.right( ) > 0 );
};

Layout.prototype.hasTop = function hasTop( ){
	return this.hasMovement( "top" );
};

Layout.prototype.isAnchoredTop = function isAnchoredTop( ){
	return sive( this.hasTop( ),
		this.top( ) === 0,
		!this.hasBottom( ) );
};

Layout.prototype.isPixelValueTop = function isPixelValueTop( ){
	return this.isPixelValue( "top" );
};

Layout.prototype.hasPixelValueTop = function hasPixelValueTop( ){
	return sive( this.hasTop( ),
		this.isPixelValueTop( ),
		this.top( ) > 0 );
};

Layout.prototype.hasBottom = function hasBottom( ){
	return this.hasMovement( "bottom" );
};

Layout.prototype.isAnchoredBottom = function isAnchoredBottom( ){
	return sive( this.hasBottom( ),
		this.bottom( ) === 0,
		!this.hasTop( ) );
};

Layout.prototype.isPixelValueBottom = function isPixelValueBottom( ){
	return this.isPixelValue( "bottom" );
};

Layout.prototype.hasPixelValueBottom = function hasPixelValueBottom( ){
	return sive( this.hasBottom( ),
		this.isPixelValueBottom( ),
		this.bottom( ) > 0 );
};

Layout.prototype.hasWidth = function hasWidth( ){
	return this.hasSize( "width" );
};

Layout.prototype.isPixelValueWidth = function isPixelValueWidth( ){
	return this.isPixelValue( "width" );
};

Layout.prototype.hasPixelValueWidth = function hasPixelValueWidth( ){
	return sive( this.hasWidth( ),
		this.isPixelValueWidth( ),
		this.width( ) > 0 );
};

Layout.prototype.hasHeight = function hasHeight( ){
	return this.hasSize( "height" );
};

Layout.prototype.isPixelValueHeight = function isPixelValueHeight( ){
	return this.isPixelValue( "height" );
};

Layout.prototype.hasPixelValueHeight = function hasPixelValueHeight( ){
	return sive( this.hasHeight( ),
		this.isPixelValueHeight( ),
		this.height( ) > 0 );
};
