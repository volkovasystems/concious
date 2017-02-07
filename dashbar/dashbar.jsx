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

import React from "react";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
import Component from "component";
import Connect from "connect";
import List from "List";

class Dashbar extends Component {
	constructor( property ){ super( property ); }

	render( ){
		let {
			name,

			header,

			path,
			view,
			index,
			link,

			hidden
		} = this.property;

		return ( <div
					hidden={ hidden }
				>
					<List
						name={ name }

						header={ header }
					>
						{
							doubt( link, ARRAY ) && truu( link )?
								link.map( ( link ) => {
									if( ( new RegExp( path ) ).test( link.path ) ){
										return ( <Connect
													name={ name }

													title={ link.title }
													label={ link.label }
													description={ link.description }
													notice={ link.notice }

													link={ link.path }

													icon={ link.icon }
													loading={ link.loading }

													action={ link.action }

													status={ link.status }
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
												>
												</Connect> );
									}
								} ) : null
						}
					</List>

					<Router
						history={ hashHistory }>
						<Route
							path={ path }
							component={ view }
						>
							<IndexRoute
								component={ index }
							>
							</IndexRoute>
							{
								doubt( link, ARRAY ) && truu( link )?
									link.filter( ( link ) => {
										return ( new RegExp( path ) ).test( link.path );
									} ).map( ( link ) => {
										<Route
											path={ link.path }
											component={ link.page }
										>
										</Route>
									} ) : null
							}
						</Route>
					</Router>
				</div> );
	}
}

export default Dashbar;
