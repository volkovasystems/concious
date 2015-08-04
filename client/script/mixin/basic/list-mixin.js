var ListMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			"items": [ ],
			"select": function select( ){ },
			"onEachListItem": function onEachListItem( ){ }
		};
	},

	"openList": function openList( ){
		$( this.getDOMNode( ) ).slideDown( );
	},

	"closeList": function closeList( ){
		$( this.getDOMNode( ) ).slideUp( );
	}
};
