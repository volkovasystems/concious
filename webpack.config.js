
const path = require( "path" );
const webpack = require( "webpack" );
const yargs = require( "yargs" );

const DedupePlugin = webpack.optimize.DedupePlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ResolverPlugin = webpack.ResolverPlugin;
const DirectoryDescriptionFilePlugin = webpack.ResolverPlugin.DirectoryDescriptionFilePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const parameter = yargs.argv;
const mode = process.env.NODE_ENV;
const directory = process.cwd( );

module.exports = {
	"entry": parameter.test? "./test.js" : "./concious.support.js",

	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ],
		"alias": ( ( ) => {
			let resolve = ( component ) => {
				return path.resolve( directory, `${ component }/${ component }.js` );
			};

			let component = {
				"button": resolve( "button" ),
				"component": resolve( "component" ),
				"dashbar": resolve( "dashbar" ),
				"header": resolve( "header" ),
				"label": resolve( "label" ),
				"list": resolve( "list" ),
				"icon": resolve( "icon" ),
				"item": resolve( "item" )
			};

			if( mode === "production" || mode === "test" ){
				let resolve = ( location, file ) => {
					return path.resolve( directory, "bower_components", `${ location }/${ file }` );
				};

				component[ "react" ] = resolve( "react", "react-with-addons.min.js" );
				component[ "react-dom" ] = resolve( "react", "react-dom.min.js" );
				component[ "jquery" ] = resolve( "jquery/dist", "jquery.slim.min.js" );
			}

			return component;
		} )( )
	},

	"output": {
		"library": parameter.test? "test" : "concious",
		"libraryTarget": "umd",
		"filename": parameter.test? "test.deploy.js" : "concious.deploy.js"
	},

	"module": {
		"preLoaders": [
			{ "test": /\.support\.js$|\.css/, "loaders": [ "source-map-loader" ] }
		],
		"loaders": [
			{ "test": /\.css$/, "loaders": [ "style-loader?singleton", "css-loader" ] }
		]
	},

	"externals": {
		"React": "react",
		"ReactDOM": "react-dom",
		"$": "jquery",
		"jQuery": "jquery",

		"Button": "button",
		"Component": "component",
		"Dashbar": "dashbar",
		"Header": "header",
		"Label": "label",
		"List": "list",
		"Icon": "icon",
		"Item": "item"
	},

	"plugins": [
		new DedupePlugin( ),

		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),

		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "package.json", [ "browser" ] ) ),

		new ResolverPlugin( new DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),

		( ( mode === "production" || mode === "test" )? new UglifyJsPlugin( {
			"compress": {
				"keep_fargs": true,
				"keep_fnames": true,
				"warnings": false
			},
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} ) : null ),

		( mode === "test"? new HotModuleReplacementPlugin( ) : null )
	].filter( ( plugin ) => { return !!plugin; } ),

	"devtool": "inline-source-map",

	"stats": { "warnings": false },

	"devServer": {
		"colors": true,
		"historyApiFallback": {
			"index": "test.html"
		},
		"inline": false,
		"port": 4000,
		"hot": true
	}
};
