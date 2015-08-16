var ConfigureMixin = {
	"componentDidMount": function componentDidMount( ){
		this.event.on( "component-loaded",
			( function onComponentLoaded( ){
				if( "configure" in this ){
					this.configure( );
				}
			} ).bind( this ) );
	}
};