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
			"path": "concious/list/list.jsx",
			"file": "list.jsx",
			"module": "List",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		List Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Component": "component",
			"Header": "header",
			"Item": "item"
		}
	@end-include

	@usage:
		List is a list of item.

		You can pass an array of objects compatible with the item structure.
	@end-usage
*/

import arid from "arid";
import clazof from "clazof";
import doubt from "doubt";
import falze from "falze";
import filled from "filled";
import harden from "harden";
import kley from "kley";
import plough from "plough";
import pyck from "pyck";
import truu from "truu";

import React from "react";
import Component from "component";
import Header from "header";
import Item from "item";

harden( "EXPAND", "expand" );
harden( "NONE", "none" );
harden( "RETRACT", "retract" );

class List extends Component {
	constructor( property ){ super( property ); }

	item( ){
		return this.component( ).map( ( component, index ) => {
			let key = `item-${ index }`;

			if( clazof( component, Item ) ){
				return React.cloneElement( component, { "key": key } );

			}else{
				return <Item key={ key } >{ component }</Item>
			}
		} );
	}

	wrap( list ){
		return list.map( function onEachItem( item, index ){
			return <Item key={ `item-${ index }` } { ...item } />
		} );
	}

	expand( ){
		this.edit( "view", EXPAND );
	}

	retract( ){
		this.edit( "view", RETRACT );
	}

	render( ){
		let {
			name,

			list,

			header,
			control,

			empty,

			hidden
		} = this.property;

		if( !doubt( list, ARRAY ) ){
			list = [ list ];
		}

		let item = this.item( );
		if( arid( item ) && filled( list ) ){
			item = this.wrap( list );
		}

		empty = empty || { "label": "Empty" };

		let headed = stuffed( header );
		if( headed ){
			header.name = header.name || name;

			header.view = this.state.view || NONE;
			header.expand = this.expand.bind( this );
			header.retract = this.retract.bind( this );
		}

		let controlled = truu( control );

		let view = this.state.view || NONE;

		return ( <div
					className={ kley( {
						"headed": headed,
						"controlled": controlled,
						"view": ( view !== NONE )? view : false
					} ).join( " " ) }

					hidden={ hidden }
				>
					{
						headed?
							<Header { ...header } /> : null
					}
					{
						( filled( item ) && view !== RETRACT )?
							<ul>
								{ item }
							</ul> :

						( stuffed( empty ) && view !== RETRACT )?
							<Plate { ...empty } /> :

						null
					}
					{
						( controlled && view !== RETRACT )?
							<div
								className="footer">
								{ control }
							</div> :

						null
					}
				</div> );
	}
}

export default List;
