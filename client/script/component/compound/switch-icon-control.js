var SwitchIconControl = React.createClass( {
    "type": "switch-icon-control",

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
                data-switch-icon-control={ this.props.name }>
                <IconControl
                    id="on-switch"
                    icon={ this.props.onIcon }
                    name={ this.props.on }
                    click={ this.switchOn }>
                </IconControl>
                <IconControl
                    id="off-switch"
                    icon={ this.props.offIcon }
                    name={ this.props.off }
                    click={ this.switchOff }>
                </IconControl>
            </div>
        );
    }
} );
