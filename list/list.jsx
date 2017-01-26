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

import clazof from "clazof";
import falze from "falze";
import kley from "kley";
import plough from "plough";
import pyck from "pyck";
import truu from "truu";

import React from "react";
import Component from "component";
import Header from "header";
import Item from "item";

class List extends Component {
	constructor( property ){ super( property ); }

	item( ){
		if( truu( this.property ) ){
			return pyck( plough( [ this.property.children ] ),
				( item ) => { return clazof( item, Item ); } )
				.map( ( item, index ) => {
					return React.cloneElement( item, { "key": `item-${ index }` } )
				} );
		}

		return null;
	}

	wrap( list ){
		return list.map( function onEachItem( item, index ){
			return <Item key={ `item-${ index }` } { ...item } />
		} );
	}

	render( ){
		let {
			list,

			header,

			empty,

			hidden
		} = this.property;

		let item = this.item( );
		if( falze( item ) && truu( list ) ){
			item = this.wrap( list );
		}

		empty = empty || { "label": "Empty" };

		return ( <div
				className={ kley( ).join( " " ) }

				hidden={ hidden }
			>
				{
					truu( header )?
						<Header { ...header } /> : null
				}
				{
					truu( item )?
						<ul>
							{ item }
						</ul> :

					truu( empty )?
						<Plate { ...empty } /> :

					null
				}
			</div> );
	}
}

export default List;
