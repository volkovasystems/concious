var TabListMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This is the initial selected tab.
			"tab": { },

			//: These are the list of current tabs.
			"tabs": [ ],

			//: This will be used to update the selected tab.
			"updateTab": function updateTab( ){ }
		};
	},

	"getInitialState": function getInitialState( ){
		return {
			"tab": { },

			"tabs": [ ]
		};
	},

	"updateTab": function updateTab( tab ){
		this.setState( {
			"tab": tab
		} );
	},

	"componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
		if( prevState.tab != this.props.tab ){
			this.setState( {
				"tab": this.props.tab
			} );
		}

		if( !_.isEqual( prevState.tabs, this.props.tabs ) ){
			this.setState( {
				"tabs": this.props.tabs
			} );
		}
	},

	"componentDidMount": function componentDidMount( ){
		this.setState( {
			"tab": this.props.tab,
			"tabs": this.props.tabs
		} );
	}
};