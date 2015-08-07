var IconControl = React.createClass( {
    "type": "icon-control",

    "mixins": [
		ComponentMixin,

        ControlMixin,
        SizeMixin
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
				data-icon-control={ this.props.name }
                className={ this.type }>
				<button
                    onClick={ this.props.click }
                    onFocus={ this.props.focus }
                    onBlur={ this.props.blur }>
                    <Icon
                        id="control-icon"
                        name={ this.props.name }
                        icon={ this.props.icon }>
                    </Icon>
				</button>
			</div>
        );
    }
} );
