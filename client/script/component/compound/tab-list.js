/*
	Note on left and right controls of the tab list.

	These controls should be switch icon controls.
	They should follow same width and height for proper alignment.

	They will only serve as additional controls for the tab list.
*/
var TabList = React.createClass( {
	"type": "tab-list",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		TabListMixin
	],

	"renderLeftControl": function getLeftControl( ){
		return _( this.props.children )
			.filter( function onEachChild( child ){
				return child.ref == "tabListLeftControl";
			} )
			.first( );
	},

	"markLeftControl": function markLeftControl( ){
		this.getElement( "[data-tab-list-left-control]" )
			.addClass( "left-control" );

		if( this.getElement( ".left-control" ).exists( ) ){
			this.getElement( )
				.addClass( "no-left-control" );
		}
	},

	"renderRightControl": function getRightControl( ){
		return _( this.props.children )
			.filter( function onEachChild( child ){
				return child.ref == "tabListRightControl";
			} )
			.first( );
	},

	"markRightControl": function markRightControl( ){
		this.getElement( "[data-tab-list-right-control]" )
			.addClass( "right-control" );

		if( this.getElement( ".right-control" ).exists( ) ){
			this.getElement( )
				.addClass( "no-right-control" );
		}
	},

	/*:
		Tab may contain optional click function then
			use it to override the default action.
	*/
	"clickTab": function clickTab( tab ){
		return ( function clickTabDelegate( event ){
			if( "click" in tab &&
				typeof tab.click == "function" )
			{
				tab.click( event );

			}else{
				this.components.event
					.emit( [ "open", tab.name ].join( ":" ) );	
			}

			this.props.updateTab( tab );
		} ).bind( this );
	},

	/*:
		Tab object should be in this format.
			{
				"name": String,
				"icon": String,
				"title": String
			}

		If tab contains a special render function
			then we should use it.
	*/
	"onEachTab": function onEachBar( tab ){
		if( "render" in tab &&
			typeof tab.render == "function" )
		{
			return tab.render.bind( this )( tab );
		}

		return (
			<div
				key={ tab.name }
				data-tab-item
				className={ [
					"tab-item",
					( tab.enable )? "enable" : "disable"
				].join( " " ) }>
				<Tab
					name={ tab.name }
					icon={ tab.icon }
					text={ tab.title }
					click={ this.clickTab( tab ) }>
				</Tab>
			</div>
		);
	},

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-tab-list={ this.props.name }
				className={ this.type }>
				{ this.renderLeftControl( ) }
				<div
					data-tab-items
					className="tab-items">
					{ this.state.tabs.map( this.onEachTab ) }
				</div>
				{ this.renderRightControl( ) }
			</div>
		);
	},

	"componentDidUpdate": function componentDidUpdate( prevProps, prevState ){
		if( !_.isEqual( prevProps.children, this.props.children ) ){
			this.markLeftControl( );

			this.markRightControl( );
		}
	},

	"componentDidMount": function componentDidMount( ){
		this.markLeftControl( );

		this.markRightControl( );
	}
} );