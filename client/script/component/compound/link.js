var Link = React.createClass( {
	"type": "link",

	"mixins": [
		ComponentMixin,

		ControlMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-link={ this.props.name }
				className={ this.type }>
				<button
					onClick={ this.props.click }
					onFocus={ this.props.focus }
					onBlur={ this.props.blur }>
					<Label
						id="link-label"
						name={ this.props.name }
						label={ this.props.text } >
					</Label>
				</button>
			</div>
		);
	}
} );
