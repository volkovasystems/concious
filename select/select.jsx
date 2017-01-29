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
			"path": "concious/selection/selection.jsx",
			"file": "selection.jsx",
			"module": "Selection",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Selection Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Component": "component"
		}
	@end-include
*/

import doubt from "doubt";
import harden from "harden";
import kley from "kley";
import plough from "plough";
import protype from "protype";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import List from "list";

harden( "OPEN", "open" );
harden( "CLOSE", "close" );

/*;
	@property:
		{
			"name",

			"header",

			"list",

			"view",
			"open",
			"close",

			"hidden"
		}
	@end-property
*/
class Select extends Component {
	constructor( property ){ super( property ); }

	close( ){
		this.edit( "view", CLOSE,
	 		function done( ){
				if( truu( this.property ) && protype( this.property.close, FUNCTION ) ){
					this.property.close( );
				}
			} );
	}

	/*;
		@method-documentation:
			This is the default checking if the item is selected.
		@end-method-documentation
	*/
	test( item, selected ){
		return selected.some( ( element ) => { return item.value === element.value; } );
	}

	multiple( ){
		return truu( this.property ) && protype( this.property.multiple, BOOLEAN ) && multiple;
	}

	select( item ){
		let selected = plough( this.state.selected, item ).filter( truly );

		if( !this.multiple( ) ){
			selected = [ selected.reverse( )[ 0 ] ];
		}

		this.edit( "selected", selected,
	 		function done( ){
				if( truu( this.property ) && protype( this.property.select, FUNCTION ) ){
					this.property.select( item );
				}

				if( truu( this.property ) &&
					!protype( this.property.multiple, BOOLEAN ) ||
					!this.property.multiple )
				{
					this.close( );
				}
			} );
	}

	icon( flag ){
		if( !protype( flag, BOOLEAN ) ){
			throw new Error( "invalid flag" );
		}

		let multiple = truu( this.property )? this.property.multiple : false;

		if( multiple ){
			if( flag ){
				return "check_box";

			}else{
				return "check_box_outline_blank";
			}

		}else{
			if( flag ){
				return "check_circle";

			}else{
				return "radio_button_unchecked";
			}
		}
	}

	resolve( list, selected ){
		if( !doubt( list, ARRAY ) ){
			return [ ];
		}

		let {
			select,

			resolve,
			test

		} = this.property;

		if( !protype( test, FUNCTION ) ){
			test = this.test;
		}

		return list.map( ( item ) => {
			if( protype( resolve, FUNCTION ) ){
				item = resolve( item );

			}else if( protype( item, STRING ) ){
				item = { "value": item };
			}

			item.action = {
				"icon": {
					"set": "material-icon",
					"ligature": this.icon( test( item, selected ) )
				},

				"click": ( ) => { this.select( item ); }
			};

			return item;
		} );
	}

	retrieve( ){
		if( truu( this.property ) && protype( this.property.retrieve, FUNCTION ) ){
			return this.property.retrieve( this.state.selected );
		}

		return this.state.selected;
	}

	render( ){
		let {
			name,

			header,
			control,

			list,
			selected,

			view,
			close,

			hidden
		} = this.property;

		list = this.resolve( list, plough( this.state.selected || selected ) );

		view = this.state.view || view || OPEN;

		if( truu( header ) ){
			header.action = header.action || {
				"icon": {
					"set": "material-icon",
					"ligature": "close"
				},

				"click": ( ) => { this.close( ); }
			};
		}

		console.log( "rerender", list );

		return ( <div
					className={ kley( {
						"view": view
					} ).join( " " ) }

					hidden={ hidden }
				>
					<List
						name={ name }

						header={ header }

						control={ control }

						list={ list }
					/>
					<div
						className="cover">
					</div>
				</div> );
	}
}

export default Select;
