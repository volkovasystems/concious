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
			"path": "concious/pane/pane.jsx",
			"file": "pane.jsx",
			"module": "Pane",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pane Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Component": "component"
		}
	@end-include
*/

import clazof from "clazof";
import harden from "harden";
import kein from "kein";

import React from "react";
import Component from "component";

harden( "BOTTOM", "bottom" );
harden( "LEFT", "left" );
harden( "MIDDLE", "middle" );
harden( "RIGHT", "right" );
harden( "TOP", "top" );
harden( "MINIMIZE", "minimize" );

class Pane extends Component {
	constructor( property ){ super( property ); }

	configure( ){
		this.retype( "pane" );
	}

	layout( ){
		let layout = this.property.layout;

		if( kein( this.state, "layout" ) ){
			layout = this.state.layout;
		}

		return layout;
	}

	pane( ){
		return this.component( ).filter( ( component ) => { return clazof( component, Pane ); } );
	}
}

export default Pane;
