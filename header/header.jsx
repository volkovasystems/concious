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
			"path": "concious/header/header.jsx",
			"file": "header.jsx",
			"module": "Header",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Header Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import harden from "harden";
import kein from "kein";
import kley from "kley";
import protype from "protype";
import truu from "truu";
import vound from "vound";

import React from "react";
import Component from "component";
import Plate from "plate";

harden( "CLOSE", "close" );
harden( "EXPAND", "expand" );
harden( "FOCUS", "focus" );
harden( "MINIMIZE", "minimize" );
harden( "MAXIMIZE", "maximize" );
harden( "OPEN", "open" );
harden( "NONE", "none" );
harden( "RETRACT", "retract" );
harden( "REST", "rest" );

class Header extends Component {
	constructor( property ){ super( property ); }

	expand( ){
		this.edit( "view", EXPAND, vound( this.property.expand, this ) );

		return this;
	}

	retract( ){
		this.edit( "view", RETRACT, vound( this.property.retract, this ) );

		return this;
	}

	maximize( ){
		this.edit( "view", MAXIMIZE, vound( this.property.maximize, this ) );

		return this;
	}

	minimize( view ){
		this.edit( "view", MINIMIZE, vound( this.property.minimize, this ) );

		return this;
	}

	close( ){
		this.edit( "view", CLOSE, vound( this.property.close, this ) );

		return this;
	}

	open( ){
		this.edit( "view", OPEN, vound( this.property.open, this ) );

		return this;
	}

	execute( view ){
		switch( view ){
			case RETRACT:
				this.expand( );
				break;

			case EXPAND:
				this.retract( );
				break;

			case MINIMIZE:
				this.maximize( );
				break;

			case MAXIMIZE:
				this.minimize( );
				break;

			case OPEN:
				this.close( );
		}

		return this;
	}

	dynamic( ){
		let { expand, retract, maximize, minimize, close, open } = this.property;

		return ( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) ) ||
			( protype( minimize, FUNCTION ) && protype( maximize, FUNCTION ) ) ||
			( protype( close, FUNCTION ) && protype( open, FUNCTION ) );
	}

	view( ){
		if( this.dynamic( ) ){
			if( kein( "view", this.state ) ){
				return this.state.view;
			}

			if( kein( "view", this.property ) && this.property.view !== NONE ){
				return this.property.view;
			}

			let { expand, retract, maximize, minimize, close, open } = this.property;

			if( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) ){
				return EXPAND;
			}

			if( protype( minimize, FUNCTION ) && protype( maximize, FUNCTION ) ){
				return MAXIMIZE;
			}

			if( protype( close, FUNCTION ) && protype( open, FUNCTION ) ){
				return OPEN;
			}
		}

		return NONE;
	}

	adaptive( ){
		let { action, icon, loading } = this.property;

		return ( this.dynamic( ) && truu( action ) && ( truu( icon ) || loading === true ) );
	}

	overlay( ){
		if( kein( "overlay", this.state ) ){
			return this.state.overlay;
		}

		return ( this.adaptive( )? REST : NONE );
	}

	icon( view ){
		switch( view ){
			case RETRACT:
				return "expand_more";

			case EXPAND:
				return "expand_less";

			case MINIMIZE:
				return "chevron_right";

			case MAXIMIZE:
				return "chevron_left";

			case OPEN:
				return "close";

			default:
				return "";
		}
	}

	label( ){
		let {
			name,

			icon, loading,

			label, description, notice,

			action,

			status, purpose,

			disabled, hidden
		} = this.property;

		let content = this.content( );

		if( truly( label ) || truu( content ) ){
			return ( <Plate
						name={ name }

						icon={ icon }
						loading={ loading }

						label={ label }
						description={ description }
						notice={ notice }

						action={ action }

						status={ status }
						purpose={ purpose }

						view={ this.view( ) }

						focus={ ( ) => { this.adaptive( ) && this.edit( "overlay", FOCUS ); } }

						disabled={ disabled }
						hidden={ hidden }
					>
						{ content }
					</Plate> );
		}

		return null;
	}

	control( ){
		if( this.dynamic( ) ){
			let {
				name,

				status, purpose

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
						purpose={ purpose }

						disabled={ disabled }
						hidden={ hidden || ( adaptive && overlay === REST ) }
					/> );
		}

		return null;
	}

	tag( ){
		let { status, purpose } = this.property;

		let view = this.view( );
		let overlay = this.overlay( );

		return klast( {
			"overlay": overlay === FOCUS
			[ view ]: view !== NONE,
		}, status, purpose );
	}

	render( ){
		return ( <header
					className={ this.tag( ) }

					onMouseLeave={ ( ) => { this.adaptive( ) && this.edit( "overlay", REST ); } }
				>
					<div
						className="emphasis">
					</div>
					{ this.label( ) }
					{ this.control( ) }
				</header> );
	}
}

export default Header;
