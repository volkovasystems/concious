var Dashbar = React.createClass( {
	"statics": {
		"open": function open( ){

		},

		"close": function close( ){

		}
	},

	"type": "dashbar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		ListbarMixin,
		
		DashbarConfigure
	],

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-dashbar={ this.props.name }
				className={ this.type }>
				<Listbar
					id={ this.getID( ) }
					name={ this.props.name }

					bar={ this.props.bar }
					bars={ this.props.bars }

					updateBar={ this.updateBar }

					size={ this.props.size }>
				</Listbar>
			</div>
		);
	}
} );

Component( "dashbar" ).load( "section[dashbar]", <Dashbar /> );
