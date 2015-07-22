var scriptList = [
	//: This should be loaded as much as possible in order.
	"utility/event-wrapper.js",
	"utility/component.js",
	"utility/page.js",

	"mixin/basic/control-mixin.js",
	"mixin/basic/icon-mixin.js",
	"mixin/basic/input-mixin.js",
	"mixin/basic/label-mixin.js",
	"mixin/basic/list-mixin.js",
	"mixin/basic/paragraph-mixin.js",

	"mixin/compound/list-selection-mixin.js",
	"mixin/compound/notify-mixin.js",
	"mixin/compound/scrollbar-mixin.js",
	"mixin/compound/switch-control-mixin.js",

	"mixin/page/content-mixin.js",
	"mixin/page/page-mixin.js",
	"mixin/page/page-traversal-mixin.js",

	"mixin/utility/blur-mixin.js",
	"mixin/utility/clear-state-mixin.js",
	"mixin/utility/click-mixin.js",
	"mixin/utility/component-mixin.js",
	"mixin/utility/focus-mixin.js",
	"mixin/utility/placeholder-mixin.js",
	"mixin/utility/show-hide-mixin.js",
	"mixin/utility/state-change-mixin.js",

	"component/basic/control.js",
	"component/basic/icon-control.js",
	"component/basic/icon.js",
	"component/basic/input.js",
	"component/basic/label.js",
	"component/basic/list.js",
	"component/basic/paragraph.js"
];

//: @note: Do not modify scripts beyond this line.

var path = require( "path" );
var fs = require( "fs" );

scriptList
	.map( function onEachScriptFile( scriptFile ){
		return path.resolve( ".", "client", "script", scriptFile );
	} )
	.filter( function onEachScriptFile( scriptFile ){
		return fs.existsSync( scriptFile );
	} );

exports.scriptList = scriptList;
