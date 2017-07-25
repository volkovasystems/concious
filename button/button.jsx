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

import kley from "kley";
import truly from "truly";
import truu from "truu";
import wichis from "wichis";

import React from "react";
import Component from "component";
import Icon from "icon";
import Label from "label";

const ICON = "icon";
const LABEL = "label";

class Button extends Component {
	constructor( property ){ super( property ); }

	mode( ){
		if( truly( Icon.resolve( this.property ) ) ){
			return ICON;
		}

		if( truly( this.property.label ) || truu( this.content( ) ) ){
			return LABEL;
		}

		return false;
	}

	icon( ){
		return ( <Icon { ...Icon.resolve( this.property ) }>
					{ this.content( ) }
				</Icon> );
	}

	title( ){
		let { name, title } = this.property;

		if( truly( title ) ){
			return ( <Label name={ name } key="title" category="title">
						{ title }
					</Label> );
		}

		return null;
	}

	label( ){
		let { name, label } = this.property;

		return ( <Label name={ name } key="label" target={ this.id }>
					{ wichis( label, this.content( ) ) }
				</Label> );
	}

	notice( ){
		let { name, notice } = this.property;

		if( truly( notice ) ){
			return ( <Label name={ name } key="notice" category="notice">
						{ notice }
					</Label> );
		}

		return null;
	}

	body( ){
		let mode = this.mode( );

		if( mode === ICON ){
			return this.icon( );
		}

		if( mode === LABEL ){
			return [
				this.title( ),
				this.label( ),
				this.notice( )
			];
		}

		return null;
	}

	tag( ){
		let { loading, status, purpose } = this.property;

		return klast( this.mode( ), { "loading": loading }, status, purpose );
	}

	recheck( ){
		if( this.property.loading === true ){
			this.disable( );

		}else{
			this.enable( );
		}
	}

	render( ){
		return ( <button
					type="button"

					className={ this.tag( ) }

					onClick={ this.click.bind( this ) }
					onMouseDown={ this.press.bind( this ) }
					onMouseUp={ this.release.bind( this ) }
					onMouseEnter={ this.focus.bind( this ) }
					onMouseLeave={ this.rest.bind( this ) }
				>
					{ this.body( ) }
				</button> );
	}
}

export default Button;
