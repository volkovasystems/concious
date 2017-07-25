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
import harden from "harden";
import kley from "kley";
import plough from "plough";
import protype from "protype";
import pyck from "pyck";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import Plate from "plate";

harden( "EXPAND", "expand" );
harden( "NONE", "none" );
harden( "RETRACT", "retract" );
harden( "REST", "rest" );

const ITEM = Symbol( "item" );

class Item extends Component {
	constructor( property ){ super( property ); }

	item( ){
		return ( this[ ITEM ] = wichis( this[ ITEM ], this.component( ).map( ( child, index ) => {
			return React.cloneElement( child, { "key": `${ child.name }-${ index }` } )
		} ), [ ] ) );
	}

	expand( ){
		this.edit( "view", EXPAND, vound( this.property.expand, this ) );

		return this;
	}

	retract( ){
		this.edit( "view", RETRACT, vound( this.property.retract, this ) );

		return this;
	}

	dynamic( ){
		let { expand, retract } = this.property;

		return ( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) );
	}

	view( ){
		if( this.dynamic( ) ){
			if( kein( "view", this.state ) ){
				return this.state.view;
			}

			if( kein( "view", this.property ) && this.property.view !== NONE ){
				return this.property.view;
			}

			let { expand, retract } = this.property;

			if( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) ){
				return EXPAND;
			}
		}

		return NONE;
	}

	execute( view ){
		switch( view ){
			case RETRACT:
				this.expand( );
				break;

			case EXPAND:
				this.retract( );
				break;
		}

		return this;
	}

	icon( view ){
		switch( view ){
			case RETRACT:
				return "expand_more";

			case EXPAND:
				return "expand_less";

			default:
				return "";
		}
	}

	adaptive( ){
		let { action, icon, loading } = this.property;

		return ( this.dynamic( ) && truu( action ) && ( truu( icon ) || loading === true ) );
	}

	control( ){
		if( this.dynamic( ) ){
			let {
				name,

				status,

				disabled, hidden
			} = this.property;

			let adaptive = this.adaptive( );
			let view = this.view( );
			let overlay = this.overlay( );

			return ( <Button
						name={ name }

						category={ klast( { "overlay": adaptive } ) }

						icon={ {
							"set": "material-icon",
							"ligature": this.icon( view )
						} }

						click={ ( ) => { this.execute( view ) } }

						status={ status }

						disabled={ disabled }

						hidden={ hidden || ( adaptive && overlay === REST ) }
					/> );
		}

		return null;
	}

	header( ){
		let {
			name,

			icon, loading,

			title, label, value, description, notice, target,

			action,

			status,

			disabled, hidden
		} = this.property;

		let content = this.content( );

		if( truly( label ) || truly( value ) || truu( content ) ){
			return ( <div className="header">
						<Plate
							name={ name }

							icon={ icon }
							loading={ loading }

							title={ title }
							label={ label }
							value={ value }
							description={ description }
							notice={ notice }
							target={ target }

							action={ action }

							status={ status }

							disabled={ disabled }
							hidden={ hidden }
						>
							{ content }
						</Plate>
						{ this.control( ) }
					</div> );
		}

		return null;
	}

	body( ){
		let item = this.item( );

		if( filled( item ) ){
			return ( <div className="body">
						{ item }
					</div> );
		}

		return null;
	}

	overlay( ){
		if( kein( "overlay", this.state ) ){
			return this.state.overlay;
		}

		return ( this.adaptive( )? REST : NONE );
	}

	tag( ){
		let view = this.view( );

		return klast( {
			"overlay": overlay === FOCUS
			[ view ]: view !== NONE
		}, status );
	}

	render( ){
		return ( <li
					className={ this.tag( ) }

					onMouseEnter={ this.focus.bind( this ) }
					onMouseLeave={ this.rest.bind( this ) }
				>
					{ this.header( ) }
					{ this.body( ) }
				</li> );
	},

	unmount( ){
		while( this[ ITEM ].length ){ this[ ITEM ].pop( ); }
		this[ ITEM ] = undefined;
		delete this[ ITEM ];
	}
}

export default Item;
