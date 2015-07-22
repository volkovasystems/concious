var Label = React.createClass( {
	"type": "label",

	"mixins": [
		ComponentMixin,

        LabelMixin
	],

	"render": function render( ){
        return (
            <span
                id={ this.getID( ) }
                data-component
                data-label={ this.props.name }
				className={ this.type }>
                { this.state.title }
            </span>
        );
	}
} );
