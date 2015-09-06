var Dashbar = React.createClass( {
	"statics": {
		"open": function open( ){
			Component.event.emit( "open:dashbar" );
		},

		"close": function close( ){
			Component.event.emit( "close:dashbar" );
		},

		"setBars": function setBars( bars ){
			Component.event.emit( "set:dashbar/bars", bars );
		},

		"addBars": function addBars( bars ){
			Component.event.emit( "add:dashbar/bars", bars );
		},

		"addBar": function addBar( bar ){
			Component.event.emit( "add:dashbar/bar", bar );
		},

		"disableBars": function disableBars( bars ){
			Component.event.emit( "disable:dashbar/bars", bars );
		},

		"enableBars": function enableBars( bars ){
			Component.event.emit( "enable:dashbar/bars", bars );
		},

		"disableBar": function disableBar( bar ){
			Component.event.emit( "disable:dashbar/bar", bar );
		},

		"enableBar": function enableBar( bar ){
			Component.event.emit( "enable:dashbar/bar", bar );
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
			<Page
				name="dashbar">
				<Content>
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
				</Content>
			</Page>
		);
	}
} );

Component( "dashbar" ).load( "section[dashbar]", <Dashbar /> );
