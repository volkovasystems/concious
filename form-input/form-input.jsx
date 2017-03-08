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
			"path": "concious/form-input/form-input.jsx",
			"file": "form-input.jsx",
			"module": "FormInput",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		FormInput Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Input": "input",
			"Header": "header"
		}
	@end-include
*/

import clazof from "clazof";
import kein from "kein";
import redupe from "redupe";
import wichevr from "wichevr";
import wichis from "wichis";

import React from "react";
import Input from "input";
import Header from "header";

const INPUT = Symbol.for( "input" );

class FormInput extends Input {
	constructor( property ){ super( property ); }

	configure( ){
		this.retype( "form-input" );
	}

	header( ){
		return ( <Header
					name={ this.name }
					...redupe( this.property.header, {
						"title": this.placeholder( )
					} )
				/> );
	}

	input( data ){
		data = wichis( data, { } );

		if( kein( this, INPUT ) ){
			return this[ INPUT ];
		}

		this[ INPUT ] = this.component( )
			.filter( ( component ) => { return clazof( component, Input ) } )
			.map( ( input, index ) => {
				let name = input.props.name;

				return React.cloneElement( input, {
					"key": `input-${ index }`,
					"value": wichevr( data[ name ], input.defer( ) )
				} );
			} );

		return this[ INPUT ];
	}

	body( ){
		return ( <List
					name={ this.name }
				>
					{ this.input( this.property.data ); }
				</List> );
	}

	control( ){
		return ( <Control
					name={ this.name }
				>
					{
						wichis( this.component( )
							.filter( ( component ) => {
								return clazof( component, Control );
							} ), null );
					}
				</Control> );
	}

	value( ){
		let data = { };

		this.input( ).forEach( ( input ) => {
			data[ input.property.name ] = input.value( );
		} );

		return data;
	}

	mount( ){
		this.edit( "input", this.input( this.property.data ) );
	}

	unmount( ){
		while( this[ INPUT ].length ){ this[ INPUT ].pop( ); }
		this[ INPUT ] = undefined;
		delete this[ INPUT ];
	}
}

export default Form;
