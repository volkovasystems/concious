var PageTraversalMixin = {
	"open": function open( ){
		this.clearState( );

		this.show( ".page" );
	},

	"close": function close( ){
		this.hide( ".page" );
	},

	"cancel": function cancel( ){
		this.close( );

		this.clearState( );
	}
};
