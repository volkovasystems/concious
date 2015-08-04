var Content = React.createClass( {
	"type": "content",

	"mixins": [
		ComponentMixin,

		ContentMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-content={ this.props.name }
				className={ this.type }>
				{ this.props.children }
			</div>
		);
	}
} );
