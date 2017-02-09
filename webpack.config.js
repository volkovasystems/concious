require( "graceful-fs" ).gracefulify( require( "fs" ) );

const path = require( "path" );
const webpack = require( "webpack" );

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const mode = process.env.NODE_ENV;
const directory = process.cwd( );

module.exports = function build( parameter ){
	parameter = parameter || { };

	return {
		"entry": parameter.test? {
			"test": [
				"./test.js",
				"./test/*.js"
			],
			"module": [
				"cemento",
				"doubt",
				"harden",
				"jquery",
				"protype",
				"kley",
				"raze",
				"react",
				"react-dom"
			],
			"component": [
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
				"view"
			]
		} : {
			"concious": "./concious.support.js",
			"module": [
				"cemento",
				"doubt",
				"harden",
				"jquery",
				"protype",
				"kley",
				"raze",
				"react",
				"react-dom"
			],
			"component": [
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
				"view"
			]
		},

		//parameter.test? "./test.js" : "./concious.support.js",

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
					"list-input": resolve( "list-input" ),
					"connect": resolve( "connect" ),
					"pane": resolve( "pane" ),
					"bar": resolve( "bar" ),
					"page": resolve( "page" ),
					"view": resolve( "view" )
				};

				return component;
			} )( )
		},

		"output": {
			"library": parameter.test? "test" : "concious",
			"libraryTarget": "umd",
			"filename": parameter.test? "[name].deploy.js" : "[name].deploy.js"
		},

		"module": {
			"rules": [
				{ "test": /\.js$/, "loaders": [ "source-map-loader" ], "enforce": "pre" },
				{ "test": /\.css$/, "loaders": [ "style-loader?singleton", "css-loader", "resolve-url-loader" ] },
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
			"ListInput": "list-input",
			"Connect": "connect",
			"Pane": "pane",
			"Bar": "bar",
			"Page": "page",
			"View": "view"
		},

		"plugins": [
			new CommonsChunkPlugin( { "names": [ "module", "component" ] } ),
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

		"devtool": "cheap-module-inline-source-map",

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
