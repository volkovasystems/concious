
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";

let data = { "view": EXPAND };

ReactDOM.render( ( ( ) => {
	return ( <Header
				icon={ { "set": "material-icon", "ligature": "home" } }
				description="This is a very very long text that we need to test."
				notice="This can be a very very long notice please read carefully."
				view={ data.view }
				expand={ ( ) => { data.view = EXPAND; } }
				retract={ ( ) => { data.view = RETRACT; } }
			>
				Hello World
			</Header> );
} )( ),

document.getElementById( "root" ) )
