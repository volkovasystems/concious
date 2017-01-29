require( "graceful-fs" ).gracefulify( require( "fs" ) );

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
				"component": resolve( "component" ),
				"icon": resolve( "icon" ),
				"label": resolve( "label" ),
				"indicator": resolve( "indicator" ),
				"button": resolve( "button" ),
				"control": resolve( "control" ),
				"plate": resolve( "plate" ),
				"header": resolve( "header" ),
				"item": resolve( "item" ),
				"list": resolve( "list" ),
				"select": resolve( "select" ),
				"input": resolve( "input" ),
				"text-input": resolve( "text-input" ),
				"note-input": resolve( "note-input" ),
				"toggle-input": resolve( "toggle-input" ),
				"range-input": resolve( "range-input" ),
				"list-input": resolve( "list-input" )
			};

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
			{ "test": /\.support\.js$/, "loaders": [ "source-map-loader" ] }
		],
		"loaders": [
			{ "test": /\.css$/, "loaders": [ "style-loader?singleton", "css-loader", "resolve-url" ] },
			{ "test": /\.(ttf|svg|eot|woff2?)$/, "loaders": [ "url-loader" ] }
		]
	},

	"externals": {
		"React": "react",
		"ReactDOM": "react-dom",
		"$": "jquery",
		"jQuery": "jquery",

		"Component": "component",
		"Icon": "icon",
		"Label": "label",
		"Indicator": "indicator",
		"Button": "button",
		"Control": "control",
		"Plate": "plate",
		"Header": "header",
		"Item": "item",
		"List": "list",
		"Select": "select",
		"Input": "input",
		"TextInput": "text-input",
		"NoteInput": "note-input",
		"ToggleInput": "toggle-input",
		"RangeInput": "range-input",
		"ListInput": "list-input"
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
		"clientLogLevel": "none",
		"compress": true,
		"colors": true,
		"historyApiFallback": {
			"index": "test-index.html"
		},
		"hot": true,
		"inline": true,
		"port": 4000,
		"stats": { "warnings": false },
		"watchOptions": {
			"aggregateTimeout": 1500,
		}
	}
};
