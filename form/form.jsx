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
			"path": "concious/form/form.jsx",
			"file": "form.jsx",
			"module": "Form",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Form Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import React from "react";
import Component from "component";
import Input from "input";

class Form extends Input {
	constructor( property ){ super( property ); }

	input( data ){
		return this.component( )
			.filter( ( component ) => { return clazof( component, Input ) } )
			.map( ( input, index ) => {
				return React.cloneElement( input, { "key": `input-${ index }` } );
			} );
	}

	render( ){
		let {
			name,

			header,

			data,

			control,

			hidden
		} = this.property;

		let input = this.input( data );
		this.cache = input;

		let headed = truu( header );
		if( headed ){
			header.name = header.name || name;
		}

		let controlled = truu( control );

		return ( <form
					className={ kley( {
						"headed": headed,
						"controlled": controlled
					} ).join( " " ) }

					hidden={ hidden }
				>
					{
						headed?
							<Header { ...header } /> : null
					}
					{
						truu( input )?
							<List
								name={ name }
								>
								{ input }
							</List> : null
					}
					{
						controlled?
							control : null
					}
				</form>);
	}
}

export default Form;
