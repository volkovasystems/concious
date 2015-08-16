var ListBar = React.createClass( {
	"type": "listbar",

	"mixins": [
		ComponentMixin,

		SizeMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			//: These are the list of current bars.
			"bars": [ ]
		};
	},

	"clickBar": function clickBar( barName ){
		return ( function clickBarDelegate( ){
			this.components.event.emit( [ "open", barName ].join( ":" ) );
		} ).bind( this );
	},

	"onEachBar": function onEachBar( bar ){
		var barName = [ bar, "page" ].join( "-" );

		return (
			<div
				key={ barName }
				data-bar-item
				className="bar-item">
				<Bar
					name={ barName }
					icon={ barName }
					text={ bar }
					click={ this.clickBar( barName ) }>
				</Bar>
			</div>
		);
	},

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-listbar
				className={ this.type }>
				
				<div
					data-bar-list
					className="bar-list">
					{ this.props.bars.map( this.onEachBar ) }
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