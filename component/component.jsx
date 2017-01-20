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
			"path": "concious/component/component.jsx",
			"file": "component.jsx",
			"module": "Component",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "test.html",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Component
	@end-module-documentation

	@include:
		{
			"clazof": "clazof",

			"$": "jquery",
			"React": "react",
			"ReactDOM": "react-dom",
		}
	@end-include
*/

import clazof from "clazof";
import doubt from "doubt";
import een from "een";
import falze from "falze";
import kein from "kein";
import plough from "plough";
import pyck from "pyck";
import protype from "protype";
import shardize from "shardize";
import snapd from "snapd";
import truly from "truly";
import truu from "truu";

import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

class Component extends React.Component {
	constructor( property ){
		super( property );

		this.state = { };

		this.children = [ ];

		let name = shardize( this.constructor.name );

		this.type = [ name, "component" ];

		this.name = shardize( property.name || this.name ) || name;

		this.set( property );
	}

	/*;
		@method-documentation:
			This will act as hover and focus handler.
		@end-method-documentation
	*/
	focus( event ){
		if( truu( this.component ) ){
			this.component.addClass( "focus" );
		}

		if( truu( this.property ) && protype( this.property.focus, FUNCTION ) ){
			this.property.focus( this, event );
		}
	}
	rest( event ){
		if( truu( this.component ) ){
			this.component.removeClass( "focus" );
		}

		if( truu( this.property ) && protype( this.property.rest, FUNCTION ) ){
			this.property.rest( this, event );
		}
	}
	press( event ){
		if( truu( this.component ) ){
			this.component.addClass( "press" );
		}

		if( truu( this.property ) && protype( this.property.press, FUNCTION ) ){
			this.property.press( this, event );
		}

		snapd.bind( this )( function onTimeout( ){
			this.release( );
		}, 1000 );
	}
	release( event ){
		if( truu( this.component ) ){
			this.component.removeClass( "press" );
		}

		if( truu( this.property ) && protype( this.property.release, FUNCTION ) ){
			this.property.release( this, event );
		}
	}
	click( event ){
		this.press( );

		snapd.bind( this )( function onTimeout( ){
			this.release( );
		} );

		if( truu( this.property ) && protype( this.property.click, FUNCTION ) ){
			this.property.click( this, event );
		}
	}
	disable( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.component.addClass( "disabled" );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.enable( true );

		}else if( truu( this.property ) &&
			protype( this.property.disabled, BOOLEAN ) &&
			this.property.disabled )
		{
			this.disable( true );

		}else if( truu( this.property ) &&
			( ( protype( this.property.disabled, BOOLEAN ) &&
				!this.property.disabled ) ||
			!kein( this.property, "disabled" ) ) )
		{
			this.enable( true );
		}
	}
	enable( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.component.removeClass( "disabled" );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.disable( true );
		}
	}
	hide( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.component.addClass( "hidden" );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.show( true );

		}else if( truu( this.property ) &&
			protype( this.property.hidden, BOOLEAN ) &&
			this.property.hidden )
		{
			this.hide( true );

		}else if( truu( this.property ) &&
			( ( protype( this.property.hidden, BOOLEAN ) &&
				!this.property.hidden ) ||
			!kein( this.property, "hidden" ) ) )
		{
			this.show( true );
		}
	}
	show( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.component.removeClass( "hidden" );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.hide( true );
		}
	}

	content( ){
		if( truu( this.state ) ){
			return pyck( plough( [ this.state.children ] ), STRING );
		}

		return null;
	}
	register( parent ){
		this.parent = parent;

		parent.associate( this );
	}
	associate( child ){
		if( !een( this.children, child, ( item, child ) => { return item.id === child.id; } ) ){
			this.children.push( child );
		}
	}
	rename( name ){
		this.name = name;

		return this;
	}
	set( property ){
		if( protype( property, OBJECT ) && truu( property ) ){
			this.property = property;

			snapd.bind( this )( function onTimeout( ){
				if( truu( this.component ) ){
					this.setState( this.property );
				}
			} );
		}

		return this;
	}
	get( name ){
		if( protype( name, STRING ) && truly( name ) ){
			return this.state[ name ];

		}else{
			return this.state;
		}
	}
	refresh( property ){
		if( protype( property, OBJECT ) && truu( property ) ){
			this.set( property );

		}else if( protype( this.property, OBJECT ) && truu( this.property ) ){
			this.set( this.property );
		}
	}

	bindName( ){
		if( truu( this.component ) ){
			this.component.attr( "name", this.name );
		}
	}
	bindID( ){
		this.id = [ this.name, Math.ceil( Date.now( ) * Math.random( ) ) ].join( "-" );

		if( truu( this.component ) ){
			this.component.attr( "id", this.id );
		}
	}
	bindClass( ){
		if( truu( this.component ) ){
			this.component.addClass( this.type.join( " " ) );
		}
	}
	bindCategory( ){
		if( truu( this.component ) && truu( this.property ) && truu( this.property.category ) ){
			this.component.addClass( plough( [ this.property.category ] ).join( " " ) );
		}

		return this;
	}
	bindParent( ){
		if( falze( this.state ) ){
			return this;
		}

		let children = this.state.children;

		let parent = this;

		if( doubt( children, ARRAY ) ){
			children.forEach( ( child ) => {
				if( clazof( child, Component ) ){
					child.register( parent );
				}
			} );
		}

		if( truu( this.component ) ){
			this.component.children( ).map( function onEachChild( ){
				let child = $( this ).data( "instance" );

				if( clazof( child, Component ) ){
					child.register( parent );
				}
			} );
		}

		return this;
	}
	addClass( type ){
		if( !een( this.type, type ) ){
			this.type.push( type );
		}

		this.bindClass( );

		return this;
	}
	removeClass( type ){
		this.type = this.type.filter( ( name ) => { return name !== type; } );

		this.bindClass( );

		return this;
	}
	resetClass( ){
		if( truu( this.component ) ){
			this.component.removeClass( );
		}

		return this;
	}

	initialize( ){
		this.rename( this.property.name || this.name );

		this.build( );

		this.mount( );

		this.bound( );

		this.check( );

		return this;
	}
	build( ){
		this.component = $( ReactDOM.findDOMNode( this ) );

		this.component.data( "instance", this );

		return this;
	}
	bound( ){
		this.bindName( );

		this.bindID( );

		this.bindClass( );

		this.bindCategory( );

		this.bindParent( );

		return this;
	}
	check( ){
		this.disable( );

		this.hide( );

		return this;
	}

	/*;
		@note:
			Do not implement anything on this because this will be overriden.
		@end-note
	*/
	mount( ){ }
	update( ){ }

	componentWillUpdate( ){
		this.resetClass( );
	}
	componentWillReceiveProps( property ){
		this.refresh( property );
	}
	componentDidUpdate( ){
		this.rename( this.property.name || this.name );

		this.build( );

		this.update( );

		this.bound( );

		this.check( );
	}
	componentDidMount( ){
		this.initialize( );
	}
};

export default Component;
