var Headbar = React.createClass( {
	"type": "headbar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		ConfigureMixin
	],

	"configure": function configure( ){
		this.components.event.on( "update:headbar/tabs",
			( function updateTabs( tabs ){
				this.updateTabs( tabs );
			} ).bind( this ) );

		this.components.event.on( "active:dashbar",
			( function onActiveDashbar( ){
				var left = this.getElement( ".dashbar-header-control" ).width( );
				
				$( ".headbar-items", this.getElement( ) )
					.css( {
						"left": left
					} );
			} ).bind( this ) );

		this.components.event.on( "closed:dashbar",
			( function onClosedDashbar( ){
				var left = this.getElement( ".dashbar-header-control" ).width( );
				
				$( ".headbar-items", this.getElement( ) )
					.css( {
						"left": left
					} );
			} ).bind( this ) );
	},

	"openDashbar": function openDashbar( ){
		this.getElement( ).addClass( "dashbar-active" );

		this.components.event.emit( "open:dashbar" );
	},

	"closeDashbar": function closeDashbar( ){
		this.getElement( ).removeClass( "dashbar-active" );

		this.components.event.emit( "close:dashbar" );
	},

	"openOpbar": function openOpbar( ){
		this.components.event.emit( "open:opbar" );
	},

	"closeOpbar": function closeOpbar( ){
		this.components.event.emit( "close:opbar" );
	},

	"updateTabs": function updateTabs( tabs ){
		var tab = _.first( tabs );

		this.setState( {
			"tab": tab,
			"tabs": tabs
		} );
	},

	"applyTabs": function applyTabs( ){
		if( !_.isEqual( this.props.tabs, this.state.tabs ) ){
			this.updateTabs( this.props.tabs );
		}
	},

	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This is the initial tab.
			"tab": "",

			//: These are the list of initial tabs.
			"tabs": [ ]
		};
	},

	"getInitialState": function getInitialState( ){
		return {
			//: This is the current selected tab.
			"tab": "",

			//: These are the list of current tabs.
			"tabs": [ ]
		};
	},

	"clickTab": function clickTab( tab, tabName ){
		this.setState( {
			"tab": tab
		} );

		return ( function clickTabDelegate( ){
			this.components.event( [ "open", tabName ].join( ":" ) ).open( );		
		} ).bind( this );
	},

	"onEachTab": function onEachTab( tab ){
		var tabName = [ tab, "page" ].join( "-" );

		return (
			<div
				key={ tabName }
				data-tab-item
				className="tab-item">
				<Tab
					name={ tabName }
					icon={ tabName }
					text={ tab }
					click={ this.clickTab( tab, tabName ) }>
				</Tab>
			</div>
		);
	},

	"render": function onRender( ){
		var tab = this.state.tab;

		var tabs = _.without( this.state.tabs, tab );

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
						id="dashbar-header-control"
						name={ tab }
						text={ tab }
						onIcon="menu"
						offIcon="close"
						expanded={ false }
						open={ this.openDashbar }
						close={ this.closeDashbar }>
					</ExpandControl>
				</div>

				<div
					className="headbar-items">
					<div
						data-tab-list
						className="tab-list">
						{ tabs.map( this.onEachTab ) }
					</div>
				</div>

				<div
					data-opbar-header-control
					className="opbar-header-control">
					<SwitchIconControl
						id="opbar-header-control"
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

	"componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
		this.applyTabs( );
	},

	"componentDidMount": function componentDidMount( ){
		this.applyTabs( );

		this.hide( );
	}
} );

Component( "headbar" ).load( "section[headbar]", <Headbar /> );