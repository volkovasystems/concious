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
			"path": "concious/plate/plate.jsx",
			"file": "plate.jsx",
			"module": "Plate",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Plate Component

			Plates are higher order components.
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
import protype from "protype";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import Icon from "icon";
import Label from "label";
import Button from "button";

harden( "MAXIMIZE", "maximize" );
harden( "MINIMIZE", "minimize" );

class Plate extends Component {
	constructor( property ){ super( property ); }

	icon( ){
		let icon = Icon.resolve( this.property );

		if( truly( icon ) ){
			return ( <Icon { ...icon } /> )
		}

		return null;
	}

	label( ){
		let { name, title, label, value, description, notice, target } = this.property;

		let content = this.content( );
		if( truly( label ) || truly( value ) || truu( content ) ){
			return ( <div className="content">
						{
							[
								truly( title )?
									<Label name={ name } key="title" category="title" >
										{ title }
									</Label> : null,

								<Label
									name={ name }

									key="value"

									category="value"
									target={ target }
								>
									{ wichis( label, value, content ) }
								</Label>,

								truly( description )?
									<Label name={ name } key="description" category="description">
										{ description }
									</Label> : null,

								truly( notice )?
									<Label name={ name } key="notice" category="notice">
										{ notice }
									</Label> : null
							]
						}
					</div> );
		}

		return null;
	}

	loading( ){
		let { name, loading } = this.property;

		if( loading === true ){
			return ( <Icon name={ name } loading={ true } /> );
		}

		return null;
	}

	action( ){
		let {
			name,
			action,
			status,
			purpose,
			click,
			press,
			release,
			focus,
			rest,
			disabled,
			hidden
		} = this.property;

		if( truu( action ) ){
			return ( <Button
						name={ name }

						icon={ action.icon || {
							"set": "material-icon",
							"ligature": "more_vert"
						} }

						status={ action.status || status }
						purpose={ action.purpose || purpose }

						click={ action.click || click }
						press={ action.press || press }
						release={ action.release || release }
						focus={ action.focus || focus }
						rest={ action.rest || rest }

						disabled={ action.disabled }
						hidden={ action.hidden }
					/> )
		}

		return null;
	}

	tag( ){
		let { description, status, purpose } = this.property;

		return klast( { "descriptive": truly( description ) }, status, purpose );
	}

	render( ){
		return ( <div
					className={ this.tag( ) }

					onMouseEnter={ this.focus.bind( this ) }
					onMouseLeave={ this.rest.bind( this ) }
				>
					{ this.icon( ) }
					{ this.label( ) }
					{ this.action( ) }
					{ this.loading( ) }
				</div> );
	}
}

export default Plate;
