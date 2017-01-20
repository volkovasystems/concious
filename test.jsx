
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";

ReactDOM.render( <Control
		icon={ { "set": "material-icon", "ligature": "home" } }
		action={ { "set": "material-icon", "ligature": "more_vert" } }>
		Hello World
	</Control>,
	document.getElementById( "root" ) )
