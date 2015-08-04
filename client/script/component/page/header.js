var Header = React.createClass( {
	"type": "header",

	"mixins": [
		ComponentMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-header={ this.props.name }
				className={ this.type }>
				{ this.props.children }
			</div>
		);
	}
} );
