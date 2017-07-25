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
			"global": true,
			"class": true
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
import filled from "filled";
import klast from "klast";
import truly from "truly";
import truu from "truu";
import wichis from "wichis";

import React from "react";
import Component from "component";
import Button from "button";
import Icon from "icon";

const CONTROL = Symbol( "control" );

class Control extends Component {
	constructor( property ){ super( property ); }

	control( ){
		return ( this[ CONTROL ] = wichis( this[ CONTROL ], this.component( )
			.filter( ( component ) => { return clazof( component, Button, Control ); } )
			.map( ( control, index ) => {
				return React.cloneElement( control, { "key": `${ control.name }-${ index }` } )
			} ), [ ] ) );
	}

	icon( ){
		let {
			name,

			status, purpose,

			click, press, release, rest, focus,

			disabled, hidden
		} = this.property;

		let icon = Icon.resolve( this.property );

		if( truly( icon ) ){
			return ( <Button
						key="icon"

						name={ name }

						icon={ icon }

						status={ status }
						purpose={ purpose }

						click={ click }
						press={ press }
						release={ release }
						rest={ rest }
						focus={ focus }

						disabled={ disabled }
						hidden={ hidden }
					/> );
		}

		return null;
	}

	label( ){
		let {
			name,

			title, label, notice,

			status, purpose,

			click, press, release, rest, focus,

			disabled, hidden
		} = this.property;

		if( truly( label ) ){
			return ( <Button
						key="label"

						name={ name }

						title={ title }
						label={ label }
						notice={ notice }

						status={ status }
						purpose={ purpose }

						click={ click }
						press={ press }
						release={ release }
						rest={ rest }
						focus={ focus }

						disabled={ disabled }
						hidden={ hidden }
					/> );
		}

		return null;
	}



	action( ){
		let {
			name,

			action,

			status, purpose,

			click, press, release, rest, focus,

			disabled, hidden
		} = this.property;

		if( truu( action ) ){
			return ( <Button
						key="action"

						name={ name }

						icon={ wichis( action.icon, {
							"set": "material-icon",
							"ligature": "more_vert"
						} ) }

						status={ wichevr( action.status, status ) }
						purpose={ wichevr( action.purpose, purpose ) }

						click={ wichevr( action.click, click ) }
						press={ wichevr( action.press, press ) }
						release={ wichevr( action.release, release ) }
						rest={ wichevr( action.rest, rest ) }
						focus={ wichevr( action.focus, focus ) }

						disabled={ wichevr( action.disabled, disabled ) }
						hidden={ wichevr( action.hidden, hidden ) }
					/> );
		}

		return null;
	}

	loading( ){
		let { name, loading } = this.property;

		if( loading === true ){
			return ( <Icon key="loading" name={ name } loading={ true } /> );
		}

		return null;
	}

	recheck( ){
		if( this.property.loading === true ){
			this.disable( );

			this.control( ).forEach( ( control ) => { control.disable( ); } );

		}else{
			this.enable( );

			this.control( ).forEach( ( control ) => { control.enable( ); } );
		}
	}

	tag( ){
		let { loading, status, purpose } = this.property;

		return klast( {
			"group": filled( this.control( ) ),
			"loading": loading
		}, status, purpose );
	}

	body( ){
		let control = this.control( );

		if( filled( control ) ){
			return control;
		}

		return [
			this.icon( ),

			this.label( ),

			this.action( ),

			this.loading( )
		];
	}

	render( ){
		return ( <div className={ this.tag( ) }>
					{ this.body( ) }
				</div> );
	}

	unmount( ){
		while( this[ CONTROL ].length ){ this[ CONTROL ].pop( ); }
		this[ CONTROL ] = undefined;
		delete this[ CONTROL ];
	}
}

export default Control;
