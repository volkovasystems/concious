var Bar = React.createClass( {
	"type": "bar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		IconMixin,
		ControlMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-bar={ this.props.name }
				className={ this.type }>
				<button
					onClick={ this.props.click }
					onFocus={ this.props.focus }
					onBlur={ this.props.blur }>
					<Icon
						id="bar-icon"
						name={ this.props.name }
						icon={ this.props.icon }>
					</Icon>
					<Label
						id="bar-label"
						name={ this.props.name }
						label={ this.props.text } >
					</Label>
				</button>
			</div>
		);
	}
} );
