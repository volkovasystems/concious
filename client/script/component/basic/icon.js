var Icon = React.createClass( {
	"type": "icon",

	"statics": {
		"cache": { }
	},

	"mixins": [
		ComponentMixin,

		IconMixin,
		SizeMixin
	],

	"register": function register( name, icon ){
		if( name in Icon.cache ){
			throw new Error( "icon name already registered" );
		
		}else{
			Icon.cache[ name ] = icon;
		}
	},

	"resolve": function resolve( name ){
		return [ "mdi", Icon.cache[ name ] || name ].join( "-" );
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-icon={ this.props.name }
				className={ this.type }>
				<i
					className={ [
						"mdi",
						this.resolve( this.props.icon )
					].join( " " ) }>
				</i>
			</div>
		);
	}
} );
