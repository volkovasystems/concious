var Tab = React.createClass( {
	"type": "tab",

	"mixins": [
		ComponentMixin,

		ControlMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			"icon": ""
		};
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-tab={ this.props.name }
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
