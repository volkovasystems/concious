/*:
	Wraps the component as root component with direct
		attachment to the dom.
*/
var Component = function Component( name ){
	if( this instanceof Component ){
		this.name = name;

		this.className = llamalize( name, true );

	}else{
		return new Component( name );
	}
};

//: This will be the parent event.
harden.bind( Component )( "event", new Edo( ) );
Component.prototype.event = Component.event;

Component.prototype.cache = { };

Component.prototype.load = function load( selector, blueprint ){
	if( this.name in this.cache ){
		throw new Error( "component name is already cached" );
	}

	$( selector ).ready( ( function onReady( ){
		var element = $( selector );

		if( !element.exists( ) ){
			throw new Error( "component element does not exists" );
		}

		var reactComponent = React.render( blueprint, element[ 0 ] );

		reactComponent.setProps( {
			"element": element,
			"name": this.name
		} );

		reactComponent.name = this.name;

		reactComponent.component = this;

		this.cache[ this.name ] = reactComponent;

		reactComponent.event.emit( "component-loaded" );
	} ).bind( this ) );
};

Component.prototype.get = function get( name ){
	return this.cache[ name ];
};