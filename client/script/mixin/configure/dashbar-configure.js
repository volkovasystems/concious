var DashbarConfigure = {
	"mixins": [
		ConfigureMixin
	],

	"configure": function configure( ){
		this.component.event.on( "open:dashbar",
			( function onOpenDashbar( ){
				if( "open" in this ){
					this.open( );
				}
			} ).bind( this ) );

		this.component.event.on( "close:dashbar",
			( function onCloseDashbar( ){
				if( "close" in this ){
					this.close( );
				}
			} ).bind( this ) );

		this.component.event.on( "set:dashbar/bars",
			( function onSetDashbarBars( bars ){
				this.setState( {
					"bars": bars
				} );
			} ).bind( this ) );

		this.component.event.on( "add:dashbar/bars",
			( function onAddDashbarBars( bars ){
				this.setState( {
					"bars": bars.concat( this.state.bars )
				} );
			} ).bind( this ) );

		this.component.event.on( "add:dashbar/bar",
			( function onAddDashbarBar( bar ){
				this.setState( {
					"bars": [ bar ].concat( this.state.bars )
				} );
			} ).bind( this ) );
	}
};