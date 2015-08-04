var Column = React.createClass( {
	"type": "column",

	"mixins": [
		ComponentMixin,

		TableMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-column={ this.props.name }
				className={ this.type }>
				
			</div>
		);
	}
} );
