var Description = React.createClass( {
	"type": "description",

	"mixins": [
		ComponentMixin,

        ParagraphMixin
	],

	"render": function render( ){
        return (
            <div
                id={ this.getID( ) }
                data-component
                data-description={ this.props.name }>
                <Paragraph
                    name={ this.props.name }
                    paragraph={ this.props.paragraph }>
                </Paragraph>
            </div>
        );
	}
} );
