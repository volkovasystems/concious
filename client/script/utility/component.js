var Component = function Component( name ){
	if( this instanceof Component ){
		this.name = name;

		this.className = S( [ "-", name ].join( "" ) ).camelize( ).toString( );

	}else{
		return new Component( name );
	}
};

Component.prototype.load = function load( selector, blueprint ){
	$( selector ).ready( ( function onReady( ){
		var element = $( selector );

		var reactComponent = React.render( blueprint, element[ 0 ] );

		reactComponent.setProps( {
			"element": element,
			"name": this.name
		} );

		reactComponent.name = this.name;
	} ).bind( this ) );
};
