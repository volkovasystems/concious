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

class Item extends Component {
	constructor( property ){ super( property ); }

	component( ){
		if( truu( this.property ) ){
			return pyck( plough( [ this.property.children ] )
				.filter( ( child ) => { return protype( child, OBJECT ); } ),
				( child ) => { return clazof( child, Component ); } )
				.map( ( child, index ) => {
					return React.cloneElement( child, { "key": `${ child.name }-${ index }` } )
				} );
		}

		return null;
	}

	expand( view ){
		if( view === EXPAND ){
			this.retract( );

		}else if( view === RETRACT ){
			this.expand( );

		}else{
			this.suppress( RETRACT );
			this.behave( EXPAND );

			this.edit( "view", EXPAND );
		}
	}

	retract( view ){
		if( view === RETRACT ){
			this.expand( );

		}else if( view === EXPAND ){
			this.retract( );

		}else{
			this.suppress( EXPAND );
			this.behave( RETRACT );

			this.edit( "view", RETRACT );
		}
	}

	render( ){
		let {
			name,

			icon,
			loading,

			title,
			label,
			value,
			description,
			notice,
			target,

			action,

			view,
			expand,
			retract,

			status,

			hidden
		} = this.property;

		label = label || this.content( ).join( " " );

		let dynamic = ( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) );
		if( dynamic ){
			view = this.state.view || view || EXPAND;

		}else{
			view = NONE;
		}

		let labeled = truly( label ) || truly( value );

		let component = this.component( );

		return ( <li
					className={ kley( {
							"view": dynamic && view
						},[
							status
						] ).join( " " ) }

					onMouseEnter={ this.focus.bind( this ) }
					onMouseLeave={ this.rest.bind( this ) }

					hidden={ hidden }
				>
					{
						labeled?
							<div
								className="header">
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
								/>
								{
									dynamic?
										<Button
											name={ name }

											category={ kley( {
												"overlay": truu( action ) || loading
											} ) }

											icon={ {
												"set": "material-icon",
												"ligature": ( view === EXPAND )? "expand_less" : "expand_more"
											} }

											click={ ( ) => {
												return ( view === EXPAND )? this.retract( ) : this.expand( );
											} }

											status={ status }
										/> : null
								}
							</div> : null
					}
					{
						truu( component )?
							<div
								className="body">
								{ component }
							</div> : null
					}
				</li> );
	}
}

export default Item;
