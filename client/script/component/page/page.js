var Page = React.createClass( {
	"type": "page",

	"mixins": [
		ComponentMixin,

		PageMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-page={ this.props.name }
				className={ this.type }>
				{ this.props.children }
			</div>
		);
	}
} );
