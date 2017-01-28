
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";


ReactDOM.render( ( ( ) => {
	return ( <NoteInput
				name="description"
				change={ ( name, value ) => { console.log( name, value ) } }
				notice="Input your first name."
				status="test"
			/> );
} )( ),

document.getElementById( "root" ) )
