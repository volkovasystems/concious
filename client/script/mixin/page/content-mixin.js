var ContentMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			"type": "",
			"size": ""
		};
	},

	"setType": function setType( type ){
		if( type ){
			this.content.addClass( type );	
		}
	},

	"setSize": function setSize( size ){
		if( size ){
			this.content.addClass( size );	
		}
	},

	"componentDidMount": function componentDidMount( ){
		this.content = $( this.getDOMNode( ) );

		this.setType( this.props.type );

		this.setSize( this.props.size );
	}
};
