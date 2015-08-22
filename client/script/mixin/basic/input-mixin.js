var InputMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			"input": "",
			"format": "text",
			"title": "",
			"update": function update( ){ }
		};
	},

	"componentWillMount": function componentWillMount( ){
		if( _.isEmpty( this.props.update ) ){
			throw new Error( "input update method was not initialized" );
		}

		if( typeof this.props.update != "function" ){
			throw new Error( "invalid input update method data type" );
		}
	}
};
