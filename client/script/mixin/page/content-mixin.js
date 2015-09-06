var ContentType = { };
harden.bind( ContentType )( "GROUPED_CONTENT", "grouped type" );
harden.bind( ContentType )( "ITEM_CONTENT", "item type" );

var ContentMixin = {
	"mixins": [
		SizeMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			"type": "",
			"scrollable": false,
			"spread": false
		};
	},

	"setType": function setType( type ){
		if( type ){
			this.content.addClass( type );	
		}
	},

	"resolveScrollable": function resolveScrollable( ){
		if( this.props.scrollable ){
			this.content.addClass( "scrollable" );
		
		}else{
			this.content.removeClass( "scrollable" );
		}
	},

	"componentDidUpdate": function componentDidUpdate( prevProps ){
		if( this.props.type != prevProps.type ){
			this.setType( this.props.type );
		}

		if( this.props.scrollable != prevProps.scrollable ){
			this.resolveScrollable( );
		}
	},

	"componentDidMount": function componentDidMount( ){
		this.content = $( this.getDOMNode( ) );

		this.setType( this.props.type );

		this.resolveScrollable( );
	}
};
