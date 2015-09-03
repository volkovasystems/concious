var Opbar = React.createClass( {
	"statics": {
		"open": function open( ){
			Component.event.emit( "open:opbar" );
		},

		"close": function close( ){
			Component.event.emit( "close:opbar" );
		},

		"setBars": function setBars( bars ){
			Component.event.emit( "set:opbar/bars", bars );
		},

		"addBars": function addBars( bars ){
			Component.event.emit( "add:opbar/bars", bars );
		},

		"addBar": function addBar( bar ){
			Component.event.emit( "add:opbar/bar", bar );
		},

		"disableBars": function disableBars( bars ){
			Component.event.emit( "disable:opbar/bars", bars );
		},

		"enableBars": function enableBars( bars ){
			Component.event.emit( "enable:opbar/bars", bars );
		},

		"disableBar": function disableBar( bar ){
			Component.event.emit( "disable:opbar/bar", bar );
		},

		"enableBar": function enableBar( bar ){
			Component.event.emit( "enable:opbar/bar", bar );
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