
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";

ReactDOM.render( <Control
		icon={ { "set": "fa", "icon": "fa-bullhorn" } }
		loading={ true }
		title="Title"
		notice="This can be a very very long notice please read carefully.">
		Hello World This is a very very long text that we need to test.
	</Control>,
	document.getElementById( "root" ) )
