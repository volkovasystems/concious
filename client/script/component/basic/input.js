var Input = React.createClass( {
    "type": "input",

	"mixins": [
		ComponentMixin,

		InputMixin,
        PlaceholderMixin,
	],

    "blur": function blur( ){
        this.setState( {
            "focus": false
        }, function onStateChange( ){
            this.hidePlaceholder( );

            this.props.blur( );
        } );
    },

    "focus": function focus( ){
        this.setState( {
            "focus": true
        }, function onStateChange( ){
            this.showPlaceholder( );

            this.props.focus( );
        } );
    },

	"render": function render( ){
		return (
            <div
                id={ this.getID( ) }
                data-component
                data-input={ this.props.name }
                className={ this.type }>
                <input
                    type={ this.props.format }

                    name={ this.props.name }
                    title={ this.props.title }
                    placeholder={ this.props.placeholder }

                    value={ this.props.input }

                    onFocus={ this.focus }
                    onBlur={ this.blur }
                    onChange={ this.props.update }/>
            </div>
		);
	},

    "componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
        if( this.props.input != prevProps.input ){
            if( !this.props.input && this.state.focus ){
                this.showPlaceholder( );

            }else{
                this.hidePlaceholder( );
            }
        }
    }
} );
