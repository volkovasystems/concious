var ListbarMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This is the initial selected bar.
			"bar": { },

			//: These are the list of current bars.
			"bars": [ ],

			//: This will be used to update the selected bar.
			"updateBar": function updateBar( ){ }
		};
	},

	"getInitialState": function getInitialState( ){
		return {
			"bar": { }
		};
	},

	"updateBar": function updateBar( bar ){
		this.setState( {
			"bar": bar
		} );
	},

	"componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
		if( prevState.bar != this.props.bar ){
			this.setState( {
				"bar": this.props.bar
			} );
		}
	},

	"componentDidMount": function componentDidMount( ){
		this.setState( {
			"bar": this.props.bar
		} );
	}
};