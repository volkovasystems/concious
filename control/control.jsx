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
			"path": "concious/control/control.jsx",
			"file": "control.jsx",
			"module": "Control",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Control Component

			Controls can act as a single button or multiple controls.
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include

	@usage:
		1. Basic control:
			<Control
				icon={ { "set": "material-design", "ligature": "home" } }>
				Hello World
			</Control>
	@end-usage
*/

import clazof from "clazof";
import falze from "falze";
import kley from "kley";
import plough from "plough";
import protype from "protype";
import pyck from "pyck";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import Button from "button";
import Icon from "icon";

class Control extends Component {
	constructor( property ){ super( property ); }

	control( ){
		if( truu( this.state ) ){
			return pyck( plough( [ this.state.children ] ),
				( child ) => { return clazof( child, Button, Control ); } );
		}

		return null;
	}

	render( ){
		let {
			name,

			icon,
			loading,

			label,
			title,
			notice,

			status,
			purpose,

			action,

			click,
			press,
			release,
			rest,
			focus,

			disabled,
			hidden
		} = this.state;

		let control = this.control( );

		let content = this.content( );

		if( falze( control ) ){
			icon = Icon.resolve( icon, name );
		}

		if( protype( disabled, BOOLEAN ) && disabled && truu( control ) ){
			control.forEach( ( control ) => { control.disable( true ) } );
		}

		return ( <div
					className={ kley( {
						"set": truu( control ),
						"loading": loading
					}, [
						status,
						purpose
					] ).join( " " ) }

					hidden={ hidden }
				>
					{
						truu( control )?
							control :
							( [
								truu( icon )?
									<Button
										key={ `icon-${ Date.now( ) + Math.random( ) }` }

										name={ name }

										icon={ icon }

										status={ status }
										purpose={ purpose }

										click={ click }
										press={ press }
										release={ release }
										rest={ rest }
										focus={ focus }
									/> : null,

								( truly( label ) || truly( content ) )?
									<Button
										key={ `label-${ Date.now( ) + Math.random( ) }` }

										name={ name }

										title={ title }
										notice={ notice }

										label={ label }
										status={ status }
										purpose={ purpose }

										click={ click }
										press={ press }
										release={ release }
										rest={ rest }
										focus={ focus }
									>
										{ content }
									</Button> : null,

								truu( action )?
									<Button
										key={ `action-${ Date.now( ) + Math.random( ) }` }

										name={ name }

										icon={ {
											"set": action.set || "material-design",
											"ligature": action.ligature || "more_vert"
										} }

										status={ action.status || status }
										purpose={ action.purpose || purpose }

										click={ action.click || click }
										press={ action.press || press }
										release={ action.release || release }
										rest={ action.rest || rest }
										focus={ action.focus || focus }

										disabled={ action.disabled }
										hidden={ action.hidden }
									/> : null,

								loading?
									<Icon
										key={ `loading-${ Date.now( ) + Math.random( ) }` }

										name={ name }

										loading={ true }
									>
									</Icon> : null
							] )
					}
				</div> );
	}
}

export default Control;
