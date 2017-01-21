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
import kley from "kley";
import protype from "protype";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import Icon from "icon";
import Label from "label";
import Button from "button";

class Plate extends Component {
	constructor( property ){ super( property ); }

	render( ){
		let {
			name,

			title,
			label,
			value,
			description,
			notice,
			target,

			icon,
			loading,

			action,

			status,
			purpose,

			hidden
		} = this.state;

		label = label || value || this.content( );

		let hasContent = truly( title ) || truly( label ) || truly( description ) || truly( notice );

		icon = Icon.resolve( icon, name );

		return ( <div
					className={ kley( {
						"descriptive": truly( description )
					},
					[
						status,
						purpose
					] ).join( " " ) }

					hidden={ hidden }
				>
					{
						truu( icon )?
							<Icon { ...icon }></Icon> : null
					}
					{
						hasContent?
							<div
								className="content">
								{
									[
										truly( title )?
											<Label
												category="title"
											>
												{ title }
											</Label> : null,

										truly( label )?
											<Label
												category="value"
												target={ target }
											>
												{ label }
											</Label> : null,

										truly( description )?
											<Label
												category="description"
											>
												{ description }
											</Label> : null,

										truly( notice )?
											<Label
												category="notice"
											>
												{ notice }
											</Label> : null,
									]
								}
							</div> : null
					}
					{
						( protype( loading, BOOLEAN ) && loading )?
							<Icon
								name={ name }

								loading={ true }
							>
							</Icon> :

						truu( action )?
							<Button
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
							/> : null
					}
				</div> );
	}
}

export default Plate;
