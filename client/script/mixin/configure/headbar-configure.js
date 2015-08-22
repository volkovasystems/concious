var HeadbarConfigure = {
	"mixins": [
		ConfigureMixin
	],

	"configure": function configure( ){
		this.components.event.on( "open:headbar",
			( function onOpenHeadbar( ){
				if( "open" in this ){
					this.open( );
				}
			} ).bind( this ) );

		this.components.event.on( "close:headbar",
			( function onCloseHeadbar( ){
				if( "close" in this ){
					this.close( );
				}
			} ).bind( this ) );

		this.components.event.on( "set:headbar/tabs",
			( function onSetHeadbarTabs( tabs ){
				this.setState( {
					"tabs": tabs
				} );
			} ).bind( this ) );

		this.components.event.on( "add:headbar/tabs",
			( function onAddHeadbarTabs( tabs ){
				this.setState( {
					"tabs": _.flatten( [ tabs ] ).concat( this.state.tabs );
				} );
			} ).bind( this ) );

		this.components.event.on( "add:headbar/tab",
			( function onAddHeadbarTab( tab ){
				this.setState( {
					"tabs": [ tab ].concat( this.state.tabs );
				} );
			} ).bind( this ) );
	}
};