require( "script-lister" )
	.bind( module )( [
		"utility/event-wrapper.js",
		"utility/component.js",
		"utility/page-component.js",

		"mixin/basic/control-mixin.js",
		"mixin/basic/icon-mixin.js",
		"mixin/basic/input-mixin.js",
		"mixin/basic/label-mixin.js",
		"mixin/basic/list-mixin.js",
		"mixin/basic/paragraph-mixin.js",

		"mixin/compound/switch-control-mixin.js",

		"mixin/utility/blur-mixin.js",
		"mixin/utility/clear-state-mixin.js",
		"mixin/utility/click-mixin.js",
		
		"mixin/utility/focus-mixin.js",
		"mixin/utility/placeholder-mixin.js",
		"mixin/utility/show-hide-mixin.js",
		"mixin/utility/size-mixin.js",
		"mixin/utility/state-change-mixin.js",
		"mixin/utility/component-mixin.js",

		"mixin/page/content-mixin.js",
		"mixin/page/page-mixin.js",
		"mixin/page/page-traversal-mixin.js",

		"component/basic/control.js",
		"component/basic/icon.js",
		"component/basic/input.js",
		"component/basic/label.js",
		"component/basic/paragraph.js",

		"component/compound/input-label.js",
		"component/compound/text-input.js",
		"component/compound/link.js",
		"component/compound/switch-link.js",
		"component/compound/passphrase-input.js",

		"component/page/body.js",
		"component/page/content.js",
		"component/page/footer.js",
		"component/page/header.js",
		"component/page/page.js",

		"app/login.js"
	] );
