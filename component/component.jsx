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

			There are many ways to add class to a component dom.
				1. type
					This determines the type of the component.
					The component type as well as the component namespace will not be removed.

				2. category
					This determines how the component is associated.

				3. name
					This is a single value for component names.

				4. behavior
					This determines how the component will behave. This is internal.
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
import deequal from "deequal";
import een from "een";
import falze from "falze";
import harden from "harden";
import kein from "kein";
import plough from "plough";
import pyck from "pyck";
import protype from "protype";
import shardize from "shardize";
import snapd from "snapd";
import truly from "truly";
import truu from "truu";
import whyle from "whyle";

import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

const INSTANCE = "instance";
const MOUNTED = Symbol( "mounted" );

harden( "COMPONENT", "component" );
harden( "FOCUS", "focus" );
harden( "PRESS", "press" );
harden( "HIDDEN", "hidden" );
harden( "DISABLED", "disabled" );

class Component extends React.Component {
	constructor( property ){
		super( property );

		this.state = { };

		this.children = [ ];

		let name = shardize( this.constructor.name );
		this.type = [ name, COMPONENT ];

		this.name = shardize( property.name || this.name ) || name;

		this.behavior = [ ];

		this.transfer( property );
	}

	/*;
		@method-documentation:
			This will act as hover and focus handler.
		@end-method-documentation
	*/
	focus( event ){
		if( truu( this.component ) ){
			this.behave( FOCUS );
		}

		if( truu( this.property ) && protype( this.property.focus, FUNCTION ) ){
			this.property.focus( this, event );
		}

		return this;
	}
	rest( event ){
		if( truu( this.component ) ){
			this.suppress( FOCUS );
		}

		if( truu( this.property ) && protype( this.property.rest, FUNCTION ) ){
			this.property.rest( this, event );
		}

		return this;
	}
	press( event ){
		if( truu( this.component ) ){
			this.behave( PRESS );
		}

		if( truu( this.property ) && protype( this.property.press, FUNCTION ) ){
			this.property.press( this, event );
		}

		snapd.bind( this )( function onTimeout( ){
			this.release( );
		}, 1000 );

		return this;
	}
	release( event ){
		if( truu( this.component ) ){
			this.suppress( PRESS );
		}

		if( truu( this.property ) && protype( this.property.release, FUNCTION ) ){
			this.property.release( this, event );
		}

		return this;
	}
	click( event ){
		this.press( );

		snapd.bind( this )( function onTimeout( ){
			this.release( );
		} );

		if( truu( this.property ) && protype( this.property.click, FUNCTION ) ){
			this.property.click( this, event );
		}

		return this;
	}
	disable( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.behave( DISABLED );

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
			!kein( this.property, DISABLED ) ) )
		{
			this.enable( true );
		}

		return this;
	}
	enable( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.suppress( DISABLED );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.disable( true );
		}

		return this;
	}
	hide( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.behave( HIDDEN );

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
			!kein( this.property, HIDDEN ) ) )
		{
			this.show( true );
		}

		return this;
	}
	show( flag ){
		if( truly( flag ) && truu( this.component ) && flag ){
			this.suppress( HIDDEN );

		}else if( truly( flag ) && truu( this.component ) && !flag ){
			this.hide( true );
		}

		return this;
	}

	content( ){
		if( truu( this.property ) ){
			return pyck( plough( [ this.property.children ] ), STRING );
		}

		return null;
	}
	register( parent ){
		this.parent = parent;

		parent.associate( this );

		return this;
	}
	associate( child ){
		if( !een( this.children, child, ( item, child ) => { return item.id === child.id; } ) ){
			this.children.push( child );
		}

		return this;
	}
	rename( name ){
		this.name = shardize( name ||
			( truu( this.property ) && this.property.name ) ||
			this.name || this.constructor.name );

		return this;
	}
	transfer( property ){
		if( protype( property, OBJECT ) && truu( property ) ){
			this.property = property;
		}

		return this;
	}
	set( state ){
		if( protype( state, OBJECT ) && truu( state ) ){
			whyle.bind( this )( function condition( callback ){
				callback( truu( this.component ) && this.mounted( ) );

			} )( function update( ){
				if( truu( this.component ) && this.mounted( ) ){
					this.setState( state );
				}
			} );
		}

		return this;
	}
	get( name ){
		if( protype( name, STRING ) && truly( name ) ){
			return this.property[ name ];

		}else{
			return this.property;
		}
	}
	edit( name, value ){
		if( protype( name, STRING, SYMBOL, NUMBER ) && truly( name ) &&
	 		truu( this.component ) && this.mounted( ) )
		{
			this.setState( { [ name ]: value } );
		}
	}
	refresh( state ){
		if( protype( state, OBJECT ) && truu( state ) ){
			this.set( state );

		}else if( protype( this.state, OBJECT ) && truu( this.state ) ){
			this.set( this.state );
		}

		return this;
	}

	bindName( ){
		if( truu( this.component ) ){
			this.component.attr( "name", this.name );
		}

		return this;
	}
	bindID( ){
		this.id = this.id || `${ this.name }-${ Math.ceil( Date.now( ) * Math.random( ) ) }`;

		if( truu( this.component ) ){
			this.component.attr( "id", this.id );
		}

		return this;
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

		let children = this.property.children;

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
				let child = $( this ).data( INSTANCE );

				if( clazof( child, Component ) ){
					child.register( parent );
				}
			} );
		}

		return this;
	}

	addType( type ){
		if( !een( this.type, type ) ){
			this.type.push( type );
		}

		this.bindType( );

		return this;
	}
	removeType( type ){
		let component = this.constructor.name;
		this.type = this.type.filter( ( name ) => {
			if( name === component || name === COMPONENT ){
				return true;
			}

			return name !== type || false;
		} );

		this.bindType( );

		return this;
	}
	bindType( ){
		if( truu( this.component ) ){
			this.component.addClass( this.type.join( " " ) );
		}

		return this;
	}

	behave( behavior ){
		this.resetBehavior( );

		if( !een( this.behavior, behavior ) ){
			this.behavior.push( behavior );
		}

		this.bindBehavior( );

		return this;
	}
	suppress( behavior ){
		this.resetBehavior( );

		this.behavior = this.behavior.filter( ( name ) => {
			return name !== behavior;
		} );

		this.bindBehavior( );

		return this;
	}
	resetBehavior( ){
		if( truu( this.component ) ){
			this.component.removeClass( this.behavior.join( " " ) );
		}
	}
	bindBehavior( ){
		if( truu( this.component ) ){
			this.component.addClass( this.behavior.join( " " ) );
		}

		return this;
	}

	/*;
		@method-documentation:
			This will return the aggregated behavior, type and category
				except "component" and the component name.
		@end-method-documentation
	*/
	classify( ){
		let name = shardize( this.constructor.name );

		return plough( this.property && this.property.category, this.behavior, this.type )
			.filter( ( item ) => { return  item !== "component" && item !== name; } );
	}

	/*;
		@method-documentation:
			This will remove dynamic classes.
		@end-method-documentation
	*/
	reset( ){
		if( truu( this.component ) ){
			this.component.removeClass( this.classify( ).join( " " ) );
		}

		return this;
	}

	build( ){
		this.component = $( ReactDOM.findDOMNode( this ) );

		this.component.data( INSTANCE, this );

		return this;
	}
	attach( ){
		this[ MOUNTED ] = true;

		return this;
	}
	detach( ){
		this[ MOUNTED ] = false;

		return this;
	}
	mounted( ){
		return this[ MOUNTED ] || false;
	}
	bound( ){
		this.bindName( );

		this.bindID( );

		this.bindType( );

		this.bindCategory( );

		this.bindBehavior( );

		this.bindParent( );

		return this;
	}
	check( ){
		this.disable( );

		this.hide( );

		return this;
	}

	initialize( ){
		this.rename( );

		this.build( );

		this.mount( );

		this.bound( );

		this.check( );

		this.attach( );

		return this;
	}

	/*;
		@note:
			Do not implement anything on this because this will be overriden.
		@end-note
	*/
	mount( ){ return this; }
	unmount( ){ return this; }
	update( ){ return this; }

	shouldComponentUpdate( property, state ){
		return !deequal( property, this.property ) || !deequal( state, this.state );
	}
	componentWillUpdate( property ){
		this.transfer( property );

		this.reset( );
	}
	componentDidUpdate( ){
		this.rename( );

		this.build( );

		this.update( );

		this.bound( );

		this.check( );
	}
	componentDidMount( ){
		this.initialize( );

		console.log( this.id, "mounted" );
	}
	componentWillUnmount( ){
		this.unmount( );

		this.detach( );

		console.log( this.id, "unmounted" );
	}
};

export default Component;
