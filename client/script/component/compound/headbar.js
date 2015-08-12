var Headbar = React.createClass( {
	"type": "headbar",

	"mixins": [
		ComponentMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This is the initial tab.
			"tab": "",

			//: These are the list of current tabs.
			"tabs": [ ],

			""
		};
	},

	"getInitialState": function getInitialState( ){
		return {
			//: This is the current selected tab.
			"tab": ""
		};
	},

	"onEachTab": function onEachTab( tab ){
		var tabName = [ tab, "page" ].join( "-" );

		return (
			<div
				data-tab-item>
				<Tab
					name={ tabName }
					icon={ tabName }
					text={ tab }
					click={ this.components.get( tabName ).open }>
				</Tab>
			</div>
		);
	},

	"openDashbar": function openDashbar( ){
		this.components.get( "dashbar" ).open( );
	},

	"closeDashbar": function closeDashbar( ){
		this.components.get( "dashbar" ).close( );
	},

	"openOpbar": function openOpbar( ){
		this.components.get( "opbar" ).open( );
	},

	"closeOpbar": function closeOpbar( ){
		this.components.get( "opbar" ).close`1( );
	},

	"render": function onRender( ){
		var tab = this.state.tab;

		var tabs = _.without( this.props.tabs, tab );

		return (
			<div
				id={ this.getID( ) }
				data-component
				data-headbar
				className={ this.type }>
				<div
					data-dashbar-header-control
					className="dashbar-header-control">
					<ExpandControl
						name={ tab }
						text={ tab }
						openIcon="menu"
						closeIcon="close"
						expanded={ false }
						open={ this.openDashbar }
						close={ this.closeDashbar }>
					</ExpandControl>
				</div>

				<div
					data-tab-list
					className="tab-list">
					{ tabs.map( this.onEachTab ) }
				</div>

				<div
					data-opbar-header-control
					className="opbar-header-control">
					<SwitchIconControl
						name={ tab }
						onName="open-opbar"
						offName="close-opbar"
						onIcon="dots-vertical"
						offIcon="chevron-up"
						switchOn={ this.openOpbar }
						switchOff={ this.closeOpbar }>
					</SwitchIconControl>
				</div>
			</div>
		);
	},

	"componentDidUpdate": function componentDidUpdate( ){

	},

	"componentDidMount": function componentDidMount( ){
		this.hide( );
	}
} );

Component( "headbar" ).load( "section[headbar]", <Headbar /> );