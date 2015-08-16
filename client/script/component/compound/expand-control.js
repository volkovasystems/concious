var ExpandControl = React.createClass( {
	"type": "expand-control",

	"mixins": [
		ComponentMixin,

		SwitchIconControlMixin,
		IconMixin,
		SizeMixin
	],

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
					
					icon={ this.props.onIcon || this.props.icon }
					click={ this.switchOn }

					size={ this.props.size }>
				</IconControl>
				
				<Bar
					id="off-switch"
					name={ this.props.offName }
					text={ this.props.offLabel }

					icon={ this.props.offIcon || this.props.icon }
					click={ this.switchOff }

					size={ this.props.size }>
				</Bar>
			</div>
		);
	}
} );
