
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";


ReactDOM.render( ( ( ) => {
	return ( <ListInput
				name="fruit"
				change={ ( name, value ) => { console.log( name, value ) } }
				notice="Input list of fruits."
				status="test"
			/> );
} )( ),

document.getElementById( "root" ) )
