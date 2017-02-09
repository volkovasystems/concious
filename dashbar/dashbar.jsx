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
			"path": "concious/dashbar/dashbar.jsx",
			"file": "dashbar.jsx",
			"module": "Dashbar",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Dashbar Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include
*/

import clazof from "clazof";
import doubt from "doubt";
import kley from "kley";
import plough from "plough";
import truu from "truu";

import React from "react";
import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Link,
	IndexLink,
	browserHistory
} from "react-router";
import Bar from "bar";
import Connect from "connect";
import List from "List";

class Dashbar extends Bar {
	constructor( property ){ super( property ); }

	resolveLink( link, path ){
		if( !doubt( link, ARRAY ) ){
			return [ ];
		}

		if( arid( link ) ){
			return [ ];
		}

		/*;
			@note:
				Path should be relative
			@end-note
		*/
		let pathPattern = new RegExp( `^${ path }` );

		return link.filter( ( link ) => { return pathPattern.test( link.path ); } );
	}

	route( ){
		let {
			path,

			view,
			home,
			redirect,

			link
		} = this.property;

		if( filled( link ) ){
			return ( <Router
						history={ browserHistory }
					>
						<Route
							path={ path }
							component={ view }
						>
							{
								truu( home )?
									<IndexRoute component={ home } /> :

								truly( redirect )?
									<IndexRedirect to={ redirect } /> :

								null
							}
							{
								this.resolveLink( link, path ).map( ( link ) => {
									<Route
										path={ link.path }
										component={ link.page }
									>
									</Route>
								} )
							}
						</Route>
					</Router> );
		}

		return null;
	}

	connect( ){
		let {
			name,

			path,
			link
		} = this.property;

		plough( this.component( )
			.filter( ( connect ) => { return clazof( component, Connect ) } ),

			link.map( ( link ) => {
				if( ( new RegExp( path ) ).test( link.path ) ){
					return ( <Connect
								name={ name }

								title={ link.title }
								label={ link.label }
								description={ link.description }
								notice={ link.notice }

								path={ link.path }

								icon={ link.icon }
								loading={ link.loading }

								action={ link.action }

								status={ link.status }

								hidden={ link.hidden }
							>
							</Connect> );

				}else{
					return ( <Connect
								name={ name }

								title={ link.title }
								label={ link.label }
								description={ link.description }
								notice={ link.notice }

								url={ link.path }

								icon={ link.icon }
								loading={ link.loading }

								action={ link.action }

								status={ link.status }

								hidden={ link.hidden }
							>
							</Connect> );
				}
			} ) );
	}

	render( ){
		let {
			name,

			header,

			hidden
		} = this.property;

		return ( <div
					className={ kley( "left" ).join( " " ) }
					hidden={ hidden }
				>
					<List
						name={ name }

						header={ header }
					>
						{ this.connect( ) }
					</List>

					{ this.route( ) }
				</div> );
	}
}

export default Dashbar;
