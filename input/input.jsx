
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
			"path": "concious/input/input.jsx",
			"file": "input.jsx",
			"module": "Input",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Input Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Component": "component"
		}
	@end-include
*/

import protype from "protype";
import titlelize from "titlelize";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";

class Input extends Component {
	constructor( property ){ super( property ); }

	configure( ){
		this.retype( "input" );
	}

	prepare( ){
		if( truu( this.property ) ){
			this.title = titlelize( this.property.title || this.property.name );
		}
	}

	value( ){
		if( truu( this.state.value ) ){
			return this.state.value;

		}else if( truu( this.property.value ) ){
			return this.property.value;
		}

		return null;
	}

	push( value ){
		if( truly( this.property.name ) ){
			if( truu( value ) ){
				this.edit( this.property.name, value );

			}else if( truu( this.property.value ) ){
				this.edit( this.property.name, value );
			}
		}
	}

	change( ){
		if( protype( this.property.change, FUNCTION ) ){
			this.property.change( this.property.name, this.retrieve( ) );
		}
	}

	validate( ){ return true; }
	retrieve( ){ return this.state.value; }
	clear( ){ this.edit( "value", null ); }
}

export default Input;
