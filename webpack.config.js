
const path = require( "path" );
const webpack = require( "webpack" );

module.exports = {
	"entry": "./concious.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ],
		"alias": {
			"button": path.resolve( process.cwd( ), "./button/button.js" ),
			"label": path.resolve( process.cwd( ), "./label/label.js" )
		}
	},
	"output": {
		"library": "concious",
		"libraryTarget": "umd",
		"filename": "concious.deploy.js"
	},
	"module": {
		"loaders": [
			{ "test": /\.css$/, "loaders": [ "style", "css" ] }
		]
	},
	"externals": {
		"Button": "button",
		"Label": "label"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
	]
};
