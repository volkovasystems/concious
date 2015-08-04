var Row = React.createClass( {
	"type": "row",

	"mixins": [
		ComponentMixin,

		TableMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-row={ this.props.name }
				className={ this.type }>
				
			</div>
		);
	}
} );
