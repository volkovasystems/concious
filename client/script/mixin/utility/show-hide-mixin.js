( function module( ){
	var resolveSelector = function resolveSelector( selector, element ){
		var query = element;

		if( selector ){
			if( element.has( selector ).length ){
				query = $( selector, element );

			}else if( !element.is( selector ) ){
				throw new Error( "cannot determine element" );
			}
		}

		return query;
	};

	window.ShowHideMixin = {
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
} )( );
