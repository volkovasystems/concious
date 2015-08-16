var SwitchIconControlMixin = {
	"mixins": [
		SwitchControlMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			"onIcon": "",
			"offIcon": ""
		};
	}
};
