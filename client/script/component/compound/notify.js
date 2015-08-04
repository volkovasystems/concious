var Notify = React.createClass( {
	"type": "notify",
	
	"mixins": [
		ComponentMixin,

		NotifyMixin
	],

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-notify={ this.props.name }
				className={ this.type }>
				<Description
					id="notify-description"
					name={ this.props.name }
					paragraph={ this.state.description }>
				</Description>
			</div>
		);
	}
} );
