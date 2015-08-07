var SwitchControl = React.createClass( {
	"type": "switch-control",

	"mixins": [
		ComponentMixin,

		ControlMixin,
		SwitchControlMixin,
		SizeMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-switch-control={ this.props.name }
				className={ this.type }>
				<Control
					id="on-switch"
					name={ this.props.onName }
					label={ this.props.onLabel }
					click={ this.switchOn }> 
				</Control>
				<Control
					id="off-switch"
					name={ this.props.offName }
					label={ this.props.offLabel }
					click={ this.switchOff }>
				</Control>
			</div>
		);
	}
} );
