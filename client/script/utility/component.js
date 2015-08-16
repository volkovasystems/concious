var Component = function Component( name ){
	if( this instanceof Component ){
		this.name = name;

		this.className = S( [ "-", name ].join( "" ) ).camelize( ).toString( );

	}else{
		return new Component( name );
	}
};

//: This will be the parent event.
Component.prototype.event = new Edo( );

Component.prototype.cache = { };

Component.prototype.load = function load( selector, blueprint ){
	if( this.name in this.cache ){
		throw new Error( "component name is already cached" );
	}

	$( selector ).ready( ( function onReady( ){
		var element = $( selector );

		var reactComponent = React.render( blueprint, element[ 0 ] );

		reactComponent.setProps( {
			"element": element,
			"name": this.name
		} );

		reactComponent.name = this.name;

		reactComponent.components = this;

		this.cache[ this.name ] = reactComponent;

		reactComponent.event.emit( "component-loaded" );
	} ).bind( this ) );
};

Component.prototype.get = function get( name ){
	return this.cache[ name ];
};