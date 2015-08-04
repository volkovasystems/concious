var LabelMixin = {
    "mixins": [
        SizeMixin
    ],
    
    "getDefaultProps": function getDefaultProps( ){
		return {
            "label": ""
		};
	},

    "getInitialState": function getInitialState( ){
        return {
            "title": ""
        }
    },

    "titlelizeLabel": function titlelizeLabel( ){
        this.setState( {
            "title": titlelize( this.props.label.toString( ) )
        } );
    },

    "componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
        if( prevProps.label != this.props.label ){
            this.titlelizeLabel( );

            if( !this.props.label ){
                this.clearState( );
            }
		}
    },

    "componentDidMount": function componentDidMount( ){
        this.titlelizeLabel( );
    }
};
