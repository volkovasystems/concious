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
			"path": "concious/item/item.jsx",
			"file": "item.jsx",
			"module": "Item",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Item Component

			Items are higher order components.
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import clazof from "clazof";
import kley from "kley";
import plough from "plough";
import pyck from "pyck";
import truu from "truu";

import React from "react";
import Component from "component";

class Item extends Component {
	constructor( property ){ super( property ); }

	component( ){
		if( truu( this.state ) ){
			return pyck( plough( [ this.state.children ] ),
				( child ) => { return clazof( child, Component ); } );
		}

		return null;
	}

	render( ){
		let {
			name,

			title,
			label,
			description,
			notice,

			status,
			purpose,

			hidden
		} = this.state;

		let component = this.component( );

		return ( <li
					className={ kley( [
						status,
						purpose
					] ) }
					hidden={ hidden }
				>
					{ component }
				</li> );
	}
}

export default Item;
