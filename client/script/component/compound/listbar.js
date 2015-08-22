var Listbar = React.createClass( {
	"type": "listbar",

	"mixins": [
		ComponentMixin,

		SizeMixin,
		ListbarMixin
	],

	/*
		Bar may contain optional click function then
			use it to override the default action.
	*/
	"clickBar": function clickBar( bar ){
		return ( function clickBarDelegate( event ){
			if( "click" in bar &&
				typeof bar.click == "function" )
			{
				bar.click( event );

			}else{
				this.components.event
					.emit( [ "open", bar.name ].join( ":" ) );	
			}

			this.props.updateBar( bar );
		} ).bind( this );
	},

	/*
		Bar object should be in this format.
			{
				"name": String,
				"icon": String,
				"title": String
			}

		If bar contains a special render function
			then we should use it.
	*/
	"onEachBar": function onEachBar( bar ){
		if( "render" in bar &&
			typeof bar.render == "function" )
		{
			return bar.render.bind( this )( bar );
		}

		return (
			<div
				key={ bar.name }
				data-bar-item
				className="bar-item">
				<Bar
					name={ bar.name }
					icon={ bar.icon }
					text={ bar.title }
					click={ this.clickBar( bar ) }>
				</Bar>
			</div>
		);
	},

	"render": function onRender( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-listbar={ this.props.name }
				className={ this.type }>
				
				<div
					data-bar-list
					className="bar-list">
					{ this.props.bars.map( this.onEachBar ) }
				</div>

			</div>
		);
	}
} );