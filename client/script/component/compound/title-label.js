var TitleLabel = React.createClass( {
	"type": "title-label",

	"mixins": [
		ComponentMixin,

        LabelMixin
	],

	"render": function render( ){
         return (
            <div
                id={ this.getID( ) }
                data-component
                data-title-label={ this.props.name }>
                <Label
                    name={ this.props.name }
                    label={ this.props.label }>
                </Label>
            </div>
        );
	}
} );
