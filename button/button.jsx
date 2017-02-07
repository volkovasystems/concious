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
			"path": "concious/button/button.jsx",
			"file": "button.jsx",
			"module": "Button",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Button Component
	@end-module-documentation

	@include:
		{
			"React": "react",
			"Component": "component"
		}
	@end-include

	@usage:
		1. Basic button:
			<Button>Hello World</Button>

			or

			<Button label="Hello World"/>

		2. Complete button:
			<Button title="Name" notice="This is your name.">Juan Dela Cruz</Button>

		3. Icon button:
			<Button icon={ <icon data> }>[ligature name]<Button>

		4. Loading button:
			<Button loading={ true }></Button>

		5. Button with status:
			<Button status="<status name>">Hello World</Button>

		6. Button with purpose:
			<Button purpose="<purpose name>">Hello World</Button>

		@note:
			You can combine title, notice, status, purpose.

			If the button is icon or loading type it will not contain any text.
				all textual data will be disregarded in. Icon have higher priority
				over textual data.

			Icon and loading button can have state and purpose.
		@end-note
	@end-usage
*/

import doubt from "doubt";
import falze from "falze";
import kley from "kley";
import truly from "truly";
import truu from "truu";

import React from "react";
import Component from "component";
import Icon from "icon";
import Label from "label";

const ICON = "icon";
const LABEL = "label";

class Button extends Component {
	constructor( property ){ super( property ); }

	mode( ){
		let {
			name,

			icon,
			loading,

			label
		} = this.property;

		icon = Icon.resolve( icon, loading, name );

		if( truu( icon ) ){
			return ICON;
		}

		if( truly( label ) || truu( this.content( ) ) ){
			return LABEL;
		}
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

			hidden
		} = this.property;

		let content = this.content( );

		label = label || content;

		icon = Icon.resolve( icon, loading, name );

		let mode = this.mode( );

		return ( <button
					type="button"

					className={ kley( {
						"icon": mode === ICON,
						"label": mode === LABEL,
						"loading": loading
					}, [
						status,
						purpose
					] ).join( " " ) }

					onClick={ this.click.bind( this ) }
					onMouseDown={ this.press.bind( this ) }
					onMouseUp={ this.release.bind( this ) }
					onMouseEnter={ this.focus.bind( this ) }
					onMouseLeave={ this.rest.bind( this ) }

					hidden={ hidden }
				>
					{
						( truly( title ) && mode === LABEL )?
							<Label
								name={ name }
								category="title">
								{ title }
							</Label> : null
					}
					{
						( mode === ICON )?
							<Icon { ...icon }>{ content }</Icon> :

						( truly( label ) && mode === LABEL )?
							<Label
								name={ name }
								target={ this.id }>
								{ label }
							</Label> : null
					}
					{
						( truly( notice ) && mode === LABEL )?
							<Label
								name={ name }
								category="notice">
								{ notice }
							</Label> : null
					}
				</button> );
	}
}

export default Button;
