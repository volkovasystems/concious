require( "graceful-fs" ).gracefulify( require( "fs" ) );

const llamalize = require( "llamalize" );
const path = require( "path" );
const webpack = require( "webpack" );

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const mode = process.env.NODE_ENV;
const directory = process.cwd( );

const COMPONENT_LIST = [
	"component",
	"icon",
	"label",
	"indicator",
	"button",
	"control",
	"plate",
	"header",
	"item",
	"list",
	"select",
	"input",
	"text-input",
	"note-input",
	"toggle-input",
	"range-input",
	"list-input",
	"connect",
	"pane",
	"bar",
	"page",
	"view",
	"dashbar"
];

const PRIMARY_MODULE = [
	"jquery",
	"react",
	"react-dom",
	"react-router"
];

const MODULE_LIST = [
	"cemento",
	"doubt",
	"harden",
	"protype",
	"kley",
	"raze"
];

module.exports = function build( parameter ){
	parameter = parameter || { };

	return {
		"entry": parameter.test? "./test.js" : "./concious.support.js",

		"resolve": {
			"descriptionFiles": [
				"bower.json",
				"package.json"
			],
			"modules": [
				"bower_components",
				"node_modules"
			],
			"mainFields": [
				"support",
				"browser",
				"module",
				"main"
			],
			"alias": ( ( ) => {
				let resolve = ( component ) => {
					return path.resolve( directory, `${ component }/${ component }.js` );
				};

				let component = { };

				COMPONENT_LIST.forEach( ( name ) => { component[ name ] = resolve( name ); } )

				return component;
			} )( )
		},

		"output": {
			"library": parameter.test? "test" : "concious",
			"libraryTarget": "umd",
			"filename": parameter.test? "test.deploy.js" : "concious.deploy.js"
		},

		"module": {
			"rules": [
				{ "test": /\.css$/, "loaders": [ "style-loader?singleton", "css-loader", "resolve-url-loader" ] },
				{ "test": /\.(ttf|svg|eot|woff2?)$/, "loaders": [ "url-loader" ] }
			]
		},

		"externals": ( ( module ) => {
			COMPONENT_LIST.forEach( ( name ) => { module[ llamalize( name, true ) ] = name; } );

			return module;
		} )( {
			"React": "react",
			"ReactDOM": "react-dom",
			"$": "jquery",
			"jQuery": "jquery"
		} ),

		"plugins": [
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

		"devtool": "#source-map",

		"stats": { "warnings": false },

		"devServer": {
			"clientLogLevel": "none",
			"compress": true,
			"historyApiFallback": {
				"index": "test-index.html",
				"rewrites": [
					{ "from": /^\/.*/, "to": "test-index.html" }
				]
			},
			"hot": true,
			"inline": true,
			"port": 4000,
			"stats": { "warnings": false },
			"watchOptions": {
				"aggregateTimeout": 1500,
			}
		}
	}
};
