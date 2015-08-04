var Footer = React.createClass( {
	"type": "footer",

	"mixins": [
		ComponentMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-footer={ this.props.name }
				className={ this.type }>
				{ this.props.children }
			</div>
		);
	}
} );
