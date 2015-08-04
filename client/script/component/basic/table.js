var Table = React.createClass( {
	"type": "table",

	"mixins": [
		ComponentMixin,

		TableMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-table={ this.props.name }
				className={ this.type }>
				
			</div>
		);
	}
} );
