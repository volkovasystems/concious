var Paragraph = React.createClass( {
	"type": "paragraph",

	"mixins": [
		ComponentMixin,

        ParagraphMixin
	],

	"render": function render( ){
        return (
            <p
                id={ this.getID( ) }
                data-component
                data-paragraph={ this.props.name }
				className={ this.type }>
                { this.props.paragraph }
            </p>
        );
	}
} );
