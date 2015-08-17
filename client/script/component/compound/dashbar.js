var Dashbar = React.createClass( {
	"mixins": [
		ComponentMixin,

		SizeMixin,
		ConfigureMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This is the initial bar.
			"bar": "",

			//: These are the list of initial bars.
			"bars": [ ]
		};
	},

	"getInitialState": function getInitialState( ){
		return {
			//: This is the current selected bar.
			"bar": "",

			//: These are the list of current bars.
			"bars": [ ]
		};
	},

	"onEachBar": function onEachBar( bar ){
		var name = bar;
		var icon = "";

		if( typeof bar == "object" ){
			name = bar.name;
			icon = bar.icon;
		}

		var barPage = S( [ "-", name ].join( "" ) ).camelize( ).toString( );

		return (
			<div
				data-dash-item>
				<Bar
					name={ name }
					icon={ icon }
					click={ window[ barPage ].open }>
				</Bar>
			</div>
		);
	},

	"render": function onRender( ){
		var bars = this.props.bars;

		return (
			<div
				id={ this.getID( ) }
				data-component
				data-dashbar={ this.props.name }
				className={ this.type }>
				<div
					data-dashbar
					data-align-vertical>
					<div
						data-dash-list
						data-align-vertical>
						{ bars.map( this.onEachBar ) }
					</div>
				</div>
			</div>
		);
	},

	"componentDidUpdate": function componentDidUpdate( ){

	},

	"componentDidMount": function componentDidMount( ){
		this.hide( );
	}
} )
