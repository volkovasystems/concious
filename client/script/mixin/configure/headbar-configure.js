var HeadbarConfigure = {
	"mixins": [
		ConfigureMixin
	],

	"configure": function configure( ){
		this.component.event.on( "open:headbar",
			( function onOpenHeadbar( ){
				if( "open" in this ){
					this.open( );
				}
			} ).bind( this ) );

		this.component.event.on( "close:headbar",
			( function onCloseHeadbar( ){
				if( "close" in this ){
					this.close( );
				}
			} ).bind( this ) );

		this.component.event.on( "set:headbar/tabs",
			( function onSetHeadbarTabs( tabs ){
				this.setState( {
					"tabs": tabs
				} );
			} ).bind( this ) );

		this.component.event.on( "add:headbar/tabs",
			( function onAddHeadbarTabs( tabs ){
				this.setState( {
					"tabs": tabs.concat( this.state.tabs )
				} );
			} ).bind( this ) );

		this.component.event.on( "add:headbar/tab",
			( function onAddHeadbarTab( tab ){
				this.setState( {
					"tabs": [ tab ].concat( this.state.tabs )
				} );
			} ).bind( this ) );
	}
};