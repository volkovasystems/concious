var Headbar = React.createClass( {
	"statics": {
		"open": function open( ){
			Component.event.emit( "open:headbar" );
		},

		"close": function close( ){
			Component.event.emit( "close:headbar" );
		},

		"setTabs": function setTabs( tabs ){
			Component.event.emit( "set:headbar/tabs", tabs );
		},

		"addTabs": function addTabs( tabs ){
			Component.event.emit( "add:headbar/tabs" );
		},

		"addTab": function addTab( tab ){

		},

		"disableTab": function disableTab( tab ){

		},

		"enableTab": function enableTab( tab ){

		}
	},

	"type": "headbar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		HideFirstMixin,
		TabListMixin,
		
		HeadbarConfigure
	],

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-headbar={ this.props.name }
				className={ this.type }>
				<TabList
					id={ this.getID( ) }
					name={ this.props.name }

					tab={ this.state.tab }
					tabs={ this.props.tabs }

					updateTab={ this.updateTab }

					size={ this.props.size }>

					<div
						ref="tabListLeftControl"
						data-dashbar-header-control
						data-tab-list-left-control
						className="dashbar-header-control">
						<SwitchIconControl
							id="dashbar-header-control"
							name={ this.state.tab.name }
							onName="open-dashbar"
							offName="close-dashbar"
							onIcon="menu"
							offIcon="close"
							switchOn={ Dashbar.open( ) }
							switchOff={ Dashbar.close( ) }>
						</SwitchIconControl>
					</div>

					<div
						ref="tabListRightControl"
						data-opbar-header-control
						data-tab-list-right-control
						className="opbar-header-control">
						<SwitchIconControl
							id="opbar-header-control"
							name={ this.state.tab.name }
							onName="open-opbar"
							offName="close-opbar"
							onIcon="dots-vertical"
							offIcon="chevron-up"
							switchOn={ Opbar.open }
							switchOff={ Opbar.close }>
						</SwitchIconControl>
					</div>

				</TabList>
			</div>
		);
	}
} );

Component( "headbar" ).load( "section[headbar]", <Headbar /> );