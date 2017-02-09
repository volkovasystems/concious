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
			"path": "concious/list-input/list-input.jsx",
			"file": "list-input.jsx",
			"module": "ListInput",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		ListInput Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import clazof from "clazof";
import doubt from "doubt";
import een from "een";
import falze from "falze";
import filled from "filled";
import harden from "harden";
import kein from "kein";
import protype from "protype";
import snapd from "snapd";
import titlelize from "titlelize";
import truly from "truly";
import truu from "truu";

import React from "react";
import Input from "input";
import List from "list";
import TextInput from "text-input";
import RangeInput from "range-input";

harden( "TEXT", "text" );
harden( "NUMBER", "number" );

class ListInput extends Input {
	constructor( property ){ super( property ); }

	add( ){
		let list = [ ];
		if( doubt( this.state.value, ARRAY ) && filled( this.state.value ) ){
			list = [ ].concat( this.state.value );

		}else if( doubt( this.property.value, ARRAY ) && filled( this.property.value ) ){
			list = [ ].concat( this.property.value );
		}

		let entry = this.state.entry;
		if( !een( list, entry ) && truly( entry ) ){
			list.push( entry );

			this.set( { "value": list, "entry": "" }, this.change );

			snapd.bind( this )( function clear( ){
				let entry = this.pointer( "entry" );
				if( clazof( entry, Input ) ){
					entry.clear( );
				}
			} );
		}

		return this;
	}

	remove( value ){
		let list = [ ];

		if( doubt( this.state.value, ARRAY ) && filled( this.state.value ) ){
			list = [ ].concat( this.state.value );

		}else if( doubt( this.property.value, ARRAY ) && filled( this.property.value ) ){
			list = [ ].concat( this.property.value );
		}

		if( filled( list ) && een( list, value ) ){
			list = list.filter( ( item ) => { return item !== value; } );

			this.edit( "value", list, this.change );
		}

		return this;
	}

	resolve( list ){
		if( falze( list ) ){
			return [ ];
		}

		if( !doubt( list, ARRAY ) ){
			list = [ list ];
		}

		return list.map( ( item ) => {
			if( !protype( item, OBJECT ) ){
				item = { "value": item };
			}

			item.action = {
				"icon": {
					"set": "material-icon",
					"ligature": "close"
				},
				"click": ( ) => {
					this.remove( item.value );
				}
			};

			return item;
		} );
	}

	render( ){
		let {
			name,

			notice,
			status,

			header,

			mode,

			value,

			hidden
		} = this.property;

		if( mode !== TEXT || mode !== NUMBER ){
			mode = TEXT;
		}

		if( truu( this.state.value ) ){
			value = this.state.value;
		}
		let list = this.resolve( value );

		return ( <div
					hidden={ hidden }
				>
					<div className="main">
						<div className="body">
							{
								mode === TEXT?
									<TextInput
										pointer="entry"
										name={ name }

										title={ this.title }
										notice={ notice }

										change={ ( name, value ) => { this.edit( "entry", value ); } }

										status={ status }
									/> :
								mode === NUMBER?
									<RangeInput
										pointer="entry"
										name={ name }

										title={ this.title }
										notice={ notice }

										change={ ( name, value ) => { this.edit( "entry", value ); } }

										status={ status }
									/> : null
							}
							{
								filled( list )?
									<List
										key={ Math.random( ) }
										name={ name }

										list={ list }
									/> : null
							}
						</div>
						<div className="control">
							<Button
								name={ name }

								icon={ {
									"set": "material-icon",
									"ligature": "add"
								} }

								click={ this.add.bind( this ) }
							/>
						</div>
					</div>
				</div> );
	}

	clear( ){
		this.edit( "value", [ ] );
	}
}

export default ListInput;
