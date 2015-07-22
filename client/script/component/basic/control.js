var Control = React.createClass( {
    "type": "control",

    "mixins": [
		ComponentMixin,

        ControlMixin
	],

    "render": function render( ){
        return (
			<div
                id={ this.getID( ) }
                data-component
				data-control={ this.props.name }
                className={ this.type }>
				<button
					onClick={ this.props.click }
                    onFocus={ this.props.focus }
                    onBlur={ this.props.blur }>
                    <Label
                        id="control-label"
                        name={ this.props.name }
                        label={ this.props.text } >
                    </Label>
				</button>
			</div>
        );
    }
} );
