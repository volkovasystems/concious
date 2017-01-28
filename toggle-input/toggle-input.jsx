"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining
		a copy of this software and associated documentation files
		(the "Software"), to deal in the Software without restriction,
		including without limitation the rights to use, copy, modify, merge,
		publish, distribute, sublicense, and/or sell copies of the Software,
		and to permit persons to whom the Software is furnished to do so,
		subject to the following conditions:

		The above copyright notice and this permission notice shall be included
		in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
		IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
		CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
		TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
		SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "concious",
			"path": "concious/toggle-input/toggle-input.jsx",
			"file": "toggle-input.jsx",
			"module": "ToggleInput",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		ToggleInput Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import kein from "kein";
import kley from "kley";
import protype from "protype";
import titlelize from "titlelize";
import truly from "truly";
import truu from "truu";

import React from "react";
import Input from "input";

class ToggleInput extends Input {
	constructor( property ){ super( property ); }

	toggle( ){
		let value = truu( this.property ) && this.property.value;
		if( truu( this.state ) && kein( this.state, "value" ) ){
			value = this.state.value;
		}

		value = !value;

		this.edit( "value", value,
	 		function done( ){
				if( truu( this.property ) && protype( this.property.change, FUNCTION ) ){
					this.property.change( this.property.name, value );
				}
			} );
	}

	render( ){
		let  {
			name,

			title,
			value,
			notice,

			positive,
			negative,

			status,

			hidden
		} = this.property;

		title = title || titlelize( name );

		positive = titlelize( positive || "enabled" );
		negative = titlelize( negative || "disabled" );

		if( kein( this.state, "value" ) ){
			value = this.state.value;
		}

		return ( <div
					className={ kley( "input" ).join( " " ) }
					hidden={ hidden }
				>
					<div className="main">
						<div className="body">
							{
								truly( status )?
									<Indicator status={ status } /> : null
							}
							<Button
								name={ name }

								title={ title }
								label={ value? positive : negative }
								notice={ notice }

								click={ this.toggle.bind( this ) }
							/>
						</div>
						<div className="control">
							<Button
								name={ name }

								icon={ {
									"set": "material-icon",
									"ligature": value? "check_circle" : "radio_button_unchecked"
								} }

								click={ this.toggle.bind( this ) }
							/>
						</div>
					</div>
				</div> );
	}
}

export default ToggleInput;
