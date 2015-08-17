var ShowHideMixin = {
	"show": function show( selector ){
		resolveSelector( selector, this.getElement( ) )
			.removeClass( "hidden" )
			.addClass( "shown" );
	},

	"hide": function hide( selector ){
		resolveSelector( selector, this.getElement( ) )
			.addClass( "hidden" )
			.removeClass( "shown" );
	}
};
