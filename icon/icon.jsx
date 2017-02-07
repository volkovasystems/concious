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
			"path": "concious/icon/icon.jsx",
			"file": "icon.jsx",
			"module": "Icon",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Icon Component
	@end-module-documentation

	@include:
		{
			"React": "react"
		}
	@end-include

	@usage:
		1. Simple icon:
			<Icon set="<icon set [icon name]>">[ligature]<Icon>

		2. Loading icon:
			<Icon loading={ true } />

		3. Image icon:
			<Icon image="<data uri>" />

			or

			<Icon source="<url>" />

		4. Different icon looks.
			Round edge:
			<Icon edge="round" /> or <Icon edge={ ROUND } />

			Soft edge:
			<Icon edge="soft" /> or <Icon edge={ SOFT } />

			Fit image layout:
			<Icon layout="fit" /> or <Icon layout={ FIT } />

			Spread image layout:
			<Icon layout="spread" /> or <Icon layout={ SPREAD } />
	@end-usage
*/

import budge from "budge";
import depher from "depher";
import doubt from "doubt";
import falzy from "falzy";
import harden from "harden";
import kley from "kley";
import optfor from "optfor";
import protype from "protype";
import raze from "raze";
import truly from "truly";

import React from "react";
import Component from "component";

const LIGATURE = "ligature";
const ICON = "icon";
const IMAGE = "image";
const LOADING = "loading";

harden( "SOFT", "soft" );
harden( "ROUND", "round" );
harden( "FIT", "fit" );
harden( "SPREAD", "spread" );

class Icon extends Component {
	constructor( property ){ super( property ); }

	static resolve( icon, loading, name ){
		let parameter = raze( arguments );

		if( protype( icon, STRING ) ){
			let [ set, type ] = icon.split( " " );

			icon = { "set": set, "icon": type };
		}

		if( falzy( icon ) || !protype( icon, OBJECT ) ){
			icon = { };
		}

		loading = optfor( parameter, BOOLEAN );
		if( protype( loading, BOOLEAN ) && loading ){
			icon.loading = loading;
		}

		name = optfor( budge( parameter ), STRING );
		if( protype( name, STRING ) && truly( name ) ){
			icon.name = icon.name || name;
		}

		return icon;
	}

	mode( ){
		let {
			icon,
			ligature,

			image,
			source,

			loading
		} = this.property;

		if( protype( loading, BOOLEAN ) && loading ){
			return LOADING;
		}

		if( protype( icon, STRING ) && truly( icon ) ){
			return ICON;
		}

		if( ( protype( image, STRING ) || protype( source, STRING ) ) &&
	 		( truly( image ) || truly( source ) ) )
		{
			return IMAGE;
		}

		ligature = ligature || this.extract( );
		if( protype( ligature, STRING ) && truly( ligature ) ){
			return LIGATURE;
		}
	}

	extract( ){
		let content = this.content( );

		if( doubt( content, ARRAY ) ){
			return content[ 0 ];
		}

		return null;
	}

	render( ){
		let {
			set,
			icon,
			ligature,

			image,
			source,
			layout,

			loading,

			edge,

			hidden
		} = this.property;

		let mode = this.mode( );

		ligature = ligature || this.extract( );

		return ( <div
					className={ kley( {
						"loading": mode === LOADING || set,

						"icon": mode === ICON && icon,

						"image": !loading && mode === IMAGE,
						"layout": !loading && mode === IMAGE && layout,

						"soft edge": edge === SOFT,
						"round edge": edge === ROUND,
					} ).join( " " ) }

					style={ { "backgroundImage": ( mode === IMAGE )? `url( ${ image || source } )` : "none" } }

					aria-hidden="true"

					hidden={ hidden }
				>
					{
						( mode === LOADING )?
							<div className="loader"></div> :

						( mode === LIGATURE )? ligature : null
					}
				</div> );
	}
}

export default Icon;
