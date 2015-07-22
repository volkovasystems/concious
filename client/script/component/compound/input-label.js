var InputLabel = React.createClass( {
	"type": "input-label",

	"mixins": [
		ComponentMixin,

        LabelMixin
	],

	"render": function render( ){
		var label = [ this.props.label, ":" ].join( "" );

		return (
			<div
				id={ this.getID( ) }
				data-component
                data-input-label={ this.props.name }>
                <Label
					name={ this.props.name }
					label={ label }>
				</Label>
			</div>
		);
	}
} );
