var SwitchLink = React.createClass( {
	"type": "switch-link",

	"mixins": [
		ComponentMixin,

		ControlMixin,
		SwitchControlMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-switch-link={ this.props.name }
				className={ this.type }>
				<Link
					id="on-switch"
					name={ this.props.onName }
					label={ this.props.onLabel }
					click={ this.switchOn }> 
				</Link>
				<Link
					id="off-switch"
					name={ this.props.offName }
					label={ this.props.offLabel }
					click={ this.switchOff }>
				</Link>
			</div>
		);
	}
} );
