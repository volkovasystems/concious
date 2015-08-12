var ExpandControl = React.createClass( {
	"type": "expand-control",

	"mixins": [
		ComponentMixin,

		SwitchControlMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			"icon": "",
			"openIcon": "",
			"closeIcon": ""
		};
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-expand-control={ this.props.name }
				className={ this.type }>
				<IconControl
					id="on-switch"
					name={ this.props.onName }
					label={ this.props.onLabel }
					icon={ this.props.openIcon || this.props.icon }
					click={ this.onSwitch }>
				</IconControl>
				<Bar
					id="off-switch"
					name={ this.props.offName }
					label={ this.props.offabel }
					icon={ this.props.closeIcon || this.props.icon }
					click={ this.offSwitch }>
				</Bar>
			</div>
		);
	}
} );
