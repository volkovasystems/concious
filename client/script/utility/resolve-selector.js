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