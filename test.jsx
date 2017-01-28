
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";


ReactDOM.render( ( ( ) => {
	return ( <TextInput
				name="firstName"
				change={ ( name, value ) => { console.log( name, value ) } }
				notice="Input your first name."
			/> );
} )( ),

document.getElementById( "root" ) )
