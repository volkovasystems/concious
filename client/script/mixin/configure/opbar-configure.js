var OpbarConfigure = {
	"mixins": [
		ConfigureMixin
	],

	"configure": function configure( ){
		this.component.event.on( "open:opbar",
			( function onOpenOpbar( ){
				if( "open" in this ){
					this.open( );
				}
			} ).bind( this ) );

		this.component.event.on( "close:opbar",
			( function onCloseOpbar( ){
				if( "close" in this ){
					this.close( );
				}
			} ).bind( this ) );

		this.component.event.on( "set:opbar/bars",
			( function onSetOpbarBars( bars ){
				this.setState( {
					"bars": bars
				} );
			} ).bind( this ) );

		this.component.event.on( "add:opbar/bars",
			( function onAddOpbarBars( bars ){
				this.setState( {
					"bars": bars.concat( this.state.bars )
				} );
			} ).bind( this ) );

		this.component.event.on( "add:opbar/bar",
			( function onAddOpbarBar( bar ){
				this.setState( {
					"bars": [ bar ].concat( this.state.bars )
				} );
			} ).bind( this ) );
	}
};