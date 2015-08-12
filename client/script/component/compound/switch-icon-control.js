var SwitchIconControl = React.createClass( {
	"type": "switch-icon-control",

	"mixins": [
		ComponentMixin,

		ControlMixin,
		SwitchControlMixin,
		SizeMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			"onIcon": "",
			"offIcon": ""
		};
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-switch-icon-control={ this.props.name }
				className={ this.type }>
				<IconControl
					id="on-switch"
					name={ this.props.onName }
					icon={ this.props.onIcon }
					click={ this.switchOn }>
				</IconControl>
				<IconControl
					id="off-switch"
					name={ this.props.offName }
					icon={ this.props.offIcon }
					click={ this.switchOff }>
				</IconControl>
			</div>
		);
	}
} );
