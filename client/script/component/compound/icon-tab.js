var IconTab = React.createClass( {
	"type": "icon-tab",

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
				</button>
			</div>
		);
	}
} );
