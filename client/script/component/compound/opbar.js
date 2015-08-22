var Opbar = React.createClass( {
	"statics": {
		"open": function open( ){

		},

		"close": function close( ){
			
		}
	},

	"type": "opbar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		ListbarMixin,
		
		OpbarConfigure
	],

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-opbar={ this.props.name }
				className={ this.type }>
				<Listbar
					id={ this.getID( ) }
					name={ this.props.name }

					bar={ this.props.bar }
					bars={ this.props.bars }

					size={ this.props.size }>
				</Listbar>
			</div>
		);
	}
} );