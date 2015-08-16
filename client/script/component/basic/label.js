var Label = React.createClass( {
	"type": "label",

	"mixins": [
		ComponentMixin,

		LabelMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-label={ this.props.name }
				className={ this.type }>
				<label
					htmlFor={ this.props.reference }>
					{ this.state.title }
				</label>	
			</div>
		);
	}
} );
