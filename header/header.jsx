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
import kley from "kley";
import protype from "protype";
import truu from "truu";

import React from "react";
import Component from "component";
import Plate from "plate";

harden( "EXPAND", "expand" );
harden( "RETRACT", "retract" );

class Header extends Component {
	constructor( property ){ super( property ); }

	expand( view ){
		if( view === EXPAND ){
			this.retract( );

		}else if( view === RETRACT ){
			this.expand( );

		}else{
			this.suppress( RETRACT );
			this.behave( EXPAND );

			this.view = EXPAND;

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

			this.view = RETRACT;

			this.edit( "view", RETRACT );
		}
	}

	render( ){
		let {
			name,

			icon,
			loading,

			label,
			description,
			notice,

			action,

			status,
			purpose,

			view,
			expand,
			retract,

			hidden
		} = this.property;

		label = label || this.content( );

		let dynamicView = ( protype( expand, FUNCTION ) && protype( retract, FUNCTION ) );
		if( dynamicView ){
			view = this.view || view || EXPAND;
		}

		return ( <header
					className={ kley( {
						"view": dynamicView && view
					},[
						status,
						purpose
					] ).join( " " ) }

					hidden={ hidden }
				>
					<Plate
						name={ name }

						icon={ icon }
						loading={ loading }

						label={ label }
						description={ description }
						notice={ notice }

						action={ action }

						status={ status }
						purpose={ purpose }
					/>
					{
						dynamicView?
							<Button
								name={ name }

								category={ kley( {
									"overlay": truu( action )
								} ) }

								icon={ {
									"set": "material-icon",
									"ligature": ( view === EXPAND )? "expand_less" : "expand_more"
								} }

								click={ ( ) => {
									return ( view === EXPAND )? this.retract( ) : this.expand( );
								} }

								status={ status }
								purpose={ purpose }
							/> : null
					}
				</header> );
	}
}

export default Header;
