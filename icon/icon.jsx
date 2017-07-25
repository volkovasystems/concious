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
			"global": true,
			"class": true
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

import falzy from "falzy";
import harden from "harden";
import klast from "klast";
import protype from "protype";
import truly from "truly";
import wichevr from "wichevr";

import React from "react";
import Component from "component";

const EMBEDDED = "embedded";
const IMAGE = "image";
const LIGATURE = "ligature";
const LOADING = "loading";

harden( "SHARP", "sharp" );
harden( "SOFT", "soft" );
harden( "ROUND", "round" );
harden( "FIT", "fit" );
harden( "SPREAD", "spread" );

class Icon extends Component {
	constructor( property ){ super( property ); }

	static resolve( property ){
		property = wichevr( property, { } );

		let { icon, loading, name } = property;

		if( protype( icon, STRING ) ){
			let [ set, type ] = icon.split( " " );

			icon = { "set": set, "icon": type };
		}

		if( falzy( icon ) || !protype( icon, OBJECT ) ){
			icon = { };
		}

		if( loading === true ){
			icon.loading = loading;
		}

		icon.name = wichevr( icon.name, name );

		if( falzy( icon.set ) && falzy( icon.loading ) ){
			return null;
		}

		return icon;
	}

	mode( ){
		let { icon, ligature, image, loading } = this.property;

		if( loading === true ){
			return LOADING;
		}

		ligature = wichevr( ligature, this.extract( ) );
		if( truly( ligature ) && protype( ligature, STRING ) ){
			return LIGATURE;
		}

		if( truly( icon ) && protype( icon, STRING ) ){
			return EMBEDDED;
		}

		if( truly( image ) && protype( image, STRING ) ){
			return IMAGE;
		}
	}

	image( ){
		let image = this.property.image;

		if( this.mode( ) === IMAGE && truly( image ) ){
			return `url( ${ image } )`;
		}

		return "none";
	}

	layout( ){
		if( this.mode( ) === IMAGE ){
			return wichevr( this.property.layout, SPREAD );
		}

		return "";
	}

	edge( ){
		return `${ wichevr( this.property.edge, SHARP ) } edge`;
	}

	ligature( ){
		if( this.mode( ) === LIGATURE ){
			return wichevr( this.property.ligature, this.extract( ) );
		}

		return "";
	}

	extract( ){
		return wichevr( this.content( )[ 0 ], "" );
	}

	body( ){
		let mode = this.mode( );

		if( mode === LOADING ){
			return <div className="loader"></div>
		}

		if( mode === LIGATURE ){
			return this.ligature( );
		}

		return null;
	}

	namespace( ){
		let { set, icon } = this.property;

		return `${ set } ${ wichevr( icon, "" ) }`.splice( /\s+/g, " " ).trim( );
	}

	tag( ){
		return klast( [
			this.namespace( ),
			this.mode( ),
			this.layout( ),
			this.edge( )
		] );
	}

	render( ){
		return ( <div
					className={ this.tag( ) }

					style={ { "backgroundImage": this.image( ) } }

					aria-hidden="true"
				>
					{ this.body( ) }
				</div> );
	}
}

export default Icon;
