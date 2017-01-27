
import React from "react";
import ReactDOM from "react-dom";

import "./concious.js";


ReactDOM.render( ( ( ) => {
	return ( <Select
				header={ {
					"icon": "fa fa-home",
					"label": "List of Oranges"
				} }

				list={ [
					{
						"value": "Orange"
					},
					{
						"value": "Peach"
					},
					{
						"value": "Apple"
					}
				] }
			>

			</Select> );
} )( ),

document.getElementById( "root" ) )
