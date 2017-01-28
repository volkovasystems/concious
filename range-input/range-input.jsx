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
			"path": "concious/range-input/range-input.jsx",
			"file": "range-input.jsx",
			"module": "RangeInput",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		RangeInput Component
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

import $ from "jquery";
import React from "react";
import Indicator from "indicator";
import Input from "input";

class RangeInput extends Input {
	constructor( property ){ super( property ); }

	resolveValue( value ){
		value = value || 0;

		if( !protype( value, NUMBER ) ){
			try{
				if( ( /\./ ).test( value.toString( ) ) ){
					return parseFloat( value );

				}else{
					return parseInt( value );
				}

			}catch( error ){
				return 0;
			}
		}

		return value;
	}

	increment( ){
		let value = truu( this.property ) && this.property.value || 0;
		if( truu( this.state ) && kein( this.state, "value" ) ){
			value = this.state.value;
		}

		value = this.resolveValue( value );

		this.edit( "value", ++value );
	}

	decrement( ){
		let value = truu( this.property ) && this.property.value || 0;
		if( truu( this.state ) && kein( this.state, "value" ) ){
			value = this.state.value;
		}

		value = this.resolveValue( value );

		--value;
		if( value < 0 ){
			value = 0;
		}

		this.edit( "value", value );
	}

	render( ){
		let {
			name,

			title,
			value,
			notice,

			status,

			hidden,
			disabled
		} = this.property;

		title = title || titlelize( name );

		let valued = ( truu( this.state ) && truly( this.state.value ) ) || truly( value );

		if( truu( this.state ) && kein( this.state, "value" ) ){
			value = this.state.value;
		}

		return ( <div
					className={ kley( "input", {
						"valued": valued
					} ).join( " " ) }

					hidden={ hidden }
				>
					<div className="main">
						<div className="body">
							{
								truly( status )?
									<Indicator status={ status } /> : null
							}
							{
								truly( title )?
									<Label
										name={ name }
										target={ `input-${ this.id }` }
										category="title"
									>
										{ title }
									</Label> : null
							}
							<input
								ref={ ( component ) => { $( component ).val( value ); } }
								type="number"

								defaultValue={ value }

								placeholder={ value || title }

								disabled={ disabled }

								onChange={ this.change.bind( this ) }
								onFocus={ this.focus.bind( this ) }
								onBlur={ this.rest.bind( this ) }

								min="0"
							/>
							{
								truly( notice )?
									<Label
										name={ name }
										category="notice"
									>
										{ notice }
									</Label> : null
							}
						</div>
						<div className="control">
							<Button
								name={ name }

								icon={ {
									"set": "material-icon",
									"ligature": "add"
								} }

								click={ this.increment.bind( this ) }
							/>
							<Button
								name={ name }

								icon={ {
									"set": "material-icon",
									"ligature": "remove"
								} }

								click={ this.decrement.bind( this ) }
							/>
						</div>
					</div>
				</div> );
	}

	mount( ){
		this.edit( "value", 0 );
	}
}

export default RangeInput;
