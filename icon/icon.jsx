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
			"path": "concious/icon/icon.jsx",
			"file": "icon.jsx",
			"module": "Icon",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Icon Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import depher from "depher";
import doubt from "doubt";
import kley from "kley";
import truly from "truly";

import React from "react";
import Component from "component";

class Icon extends Component {
	constructor( property ){ super( property ); }

	render( ){
		let {
			icon,
			image,
			loading
		} = this.state;

		image = image || this.content( );

		return ( <div
					className={ kley( {
						"loading": loading || icon,
						[ `${ icon }-${ image }`.replace( /\-$/, "" ) ]: !loading && truly( image )
					} ).join( " " ) }
				>
					{ loading? <div className="loader"></div> : ( image || null ) }
				</div> );
	}
}

export default Icon;
