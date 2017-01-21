
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";

ReactDOM.render( <Plate
		icon={ { "set": "fa", "icon": "fa-bullhorn" } }
		loading={ true }
		title="Title"
		description="This is a very very long text that we need to test."
		notice="This can be a very very long notice please read carefully.">
		Hello World
	</Plate>,
	document.getElementById( "root" ) )
