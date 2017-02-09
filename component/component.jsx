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
					This will not be removed.

				2. category
					This determines how the component is associated.
					This is external.

				3. name
					This is a single value for component names.
					This can be the type of component or the property name of the component.
					This will not be removed.

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

import called from "called";
import clazof from "clazof";
import doubt from "doubt";
import een from "een";
import empt from "empt";
import falze from "falze";
import falzy from "falzy";
import filled from "filled";
import harden from "harden";
import kein from "kein";
import outre from "outre";
import plough from "plough";
import pyck from "pyck";
import protype from "protype";
import shardize from "shardize";
import snapd from "snapd";
import stuffed from "stuffed";
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

class Component extends React.PureComponent {
	constructor( property ){
		super( property );

		this.initialize( property );
	}

	initialize( property ){
		this.state = { };
		this.property = { };
		this.children = [ ];
		this.behavior = [ ];

		let name = shardize( this.constructor.name );
		this.type = [ name, COMPONENT ];

		this.name = shardize( property.name || this.name ) || name;

		this.transfer( property );

		this.configure( );
	}

	stopEvent( event ){
		if( stuffed( event ) ){
			event.stopPropagation( );
			event.preventDefault( );
		}
	}

	/*;
		@method-documentation:
			This will act as hover and focus handler.
		@end-method-documentation
	*/
	focus( event ){
		this.behave( FOCUS );

		if( protype( this.property.focus, FUNCTION ) ){
			this.property.focus( this, event );
		}

		return this;
	}
	rest( event ){
		this.suppress( FOCUS );

		if( protype( this.property.rest, FUNCTION ) ){
			this.property.rest( this, event );
		}

		return this;
	}
	press( event ){
		this.behave( PRESS );

		if( protype( this.property.press, FUNCTION ) ){
			this.property.press( this, event );
		}

		snapd.bind( this )( function later( ){
			this.release( );
		}, 1000 );

		return this;
	}
	release( event ){
		this.suppress( PRESS );

		if( protype( this.property.release, FUNCTION ) ){
			this.property.release( this, event );
		}

		return this;
	}
	click( event ){
		this.press( event );

		snapd.bind( this )( function later( ){
			this.release( );
		} );

		if( protype( this.property.click, FUNCTION ) ){
			this.property.click( this, event );
		}

		return this;
	}

	disable( ){
		this.behave( DISABLED );

		return this;
	}
	enable( flag ){
		this.suppress( DISABLED );

		return this;
	}
	hide( flag ){
		this.behave( HIDDEN );

		return this;
	}
	show( flag ){
		this.suppress( HIDDEN );

		return this;
	}

	retype( type ){
		if( !een( this.type, type ) ){
			this.type.push( type );
		}

		return this;
	}
	behave( behavior ){
		if( falzy( behavior ) || !protype( behavior, STRING ) ){
			return this;
		}

		this.resetBehavior( );

		if( !een( this.behavior, behavior ) ){
			this.behavior.push( behavior );
		}

		this.bindBehavior( );

		return this;
	}
	suppress( behavior ){
		if( falzy( behavior ) || !protype( behavior, STRING ) ){
			return this;
		}

		this.resetBehavior( );

		this.behavior = this.behavior.filter( ( name ) => {
			return name !== behavior;
		} );

		this.bindBehavior( );

		return this;
	}
	resetBehavior( ){
		if( stuffed( this.node ) && filled( this.behavior ) ){
			this.node.removeClass( this.behavior.join( " " ) );
		}
	}
	resetCategory( ){
		let category = this.property.category;

		if( truu( this.node ) && truu( category ) ){
			this.node.removeClass( plough( category ).filter( truly ).join( " " ) );
		}
	}

	content( ){
		return pyck( plough( [ this.property.children ] ).filter( truly ), STRING );
	}
	component( ){
		return pyck( plough( [ this.property.children ] ),
			( child ) => { return clazof( child, Component ); } );
	}

	register( parent ){
		this.parent = this.parent || parent;

		parent.associate( this );

		return this;
	}
	associate( child ){
		if( doubt( this.children, ARRAY ) &&
			!een( this.children, child, ( item, child ) => { return item.id === child.id; } ) )
		{
			this.children.push( child );
		}

		return this;
	}
	disconnect( ){
		if( truu( this.parent ) && truu( this.parent.children ) ){
			this.parent.children = this.parent.children.filter( ( child ) => {
				return child.id !== this.id;
			} );
		}

		return this;
	}
	pointer( name ){
		if( truu( this.children ) ){
			for( let index = 0; index < this.children.length; index++ ){
				let child = this.children[ index ];
				if( truu( child.property ) && child.property.pointer === name ){
					return this.children[ index ];
				}
			}
		}

		return null;
	}

	/*;
		@method-documentation:
			This will try to extract any namespace we can extract.
		@end-method-documentation
	*/
	rename( name ){
		this.name = shardize( name ||

			this.property.name || this.state.name ||

			this.name || this.constructor.name );

		return this;
	}


	transfer( property ){
		if( protype( property, OBJECT ) && truu( property ) ){
			this.property = property;
		}

		return this;
	}

	set( state, done ){
		if( protype( state, OBJECT ) && truu( state ) ){
			done = called.bind( this )( done );

			whyle.bind( this )( function condition( callback ){
				callback( !this.mounted( ) );

			} )( function update( ){
				if( this.mounted( ) ){
					this.setState( state, done );
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
	edit( name, value, done ){
		done = called.bind( this )( done );

		snapd.bind( this )( function later( ){
			if( protype( name, STRING, SYMBOL, NUMBER ) && truly( name ) && this.mounted( ) ){
				this.setState( { [ name ]: value }, done );
			}
		} );
	}
	refresh( state, done ){
		if( protype( state, OBJECT ) && truu( state ) ){
			this.set( state, done );

		}else if( stuffed( this.state ) ){
			this.set( this.state, done );
		}

		return this;
	}

	bindName( ){
		if( truu( this.node ) ){
			this.node.attr( "name", this.name );
		}

		return this;
	}
	bindID( ){
		let namespace = outre( [ this.name ].concat( this.type ) ).join( "-" );
		this.id = this.id || `${ namespace }-${ Math.ceil( Date.now( ) * Math.random( ) ) }`;

		if( truu( this.node ) ){
			this.node.attr( "id", this.id );
		}

		return this;
	}
	bindType( ){
		if( truu( this.node ) ){
			this.node.addClass( this.type.join( " " ) );
		}

		return this;
	}
	bindCategory( ){
		if( truu( this.node ) && stuffed( this.property ) && truu( this.property.category ) ){
			this.node.addClass( plough( [ this.property.category ] ).join( " " ) );
		}

		return this;
	}
	bindBehavior( ){
		if( truu( this.node ) ){
			this.node.addClass( this.behavior.join( " " ) );
		}

		return this;
	}
	bindParent( ){
		if( empt( this.property ) ){
			return this;
		}

		let children = this.property.children;

		let parent = this;

		if( doubt( children, ARRAY ) ){
			children.forEach( ( child ) => {
				if( clazof( child, Component ) ){
					if( child.parent !== parent ){
						child.register( parent );
					}
				}
			} );
		}

		if( truu( this.node ) ){
			this.node.find( ".component" ).each( function onEachChild( index, child ){
				child = $( child ).data( INSTANCE );

				if( clazof( child, Component ) ){
					if( falze( child.parent ) && child.parent !== parent ){
						child.register( parent );
					}
				}
			} );
		}

		return this;
	}

	/*;
		@method-documentation:
			This will remove dynamic classes.
		@end-method-documentation
	*/
	reset( ){
		this.resetCategory( );

		this.resetBehavior( );

		return this;
	}

	build( ){
		this.node = $( ReactDOM.findDOMNode( this ) );

		if( truu( this.node ) ){
			this.node.data( INSTANCE, this );
		}

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
		if( this.property.disabled === true ){
			this.disable( );

		}else{
			this.enable( );
		}

		if( this.property.hidden === true ){
			this.hide( );

		}else{
			this.show( );
		}

		return this;
	}

	/*;
		@note:
			Do not implement anything on this because this will be overriden.
		@end-note
	*/
	configure( ){ return this; }
	prepare( ){ return this; }
	mount( ){ return this; }
	update( ){ return this; }
	unmount( ){ return this; }

	componentWillUpdate( property ){
		this.transfer( property );

		this.reset( );

		this.prepare( );
	}
	componentWillMount( ){
		this.prepare( );
	}
	componentDidUpdate( ){
		this.rename( );

		this.build( );

		this.update( );

		this.bound( );

		this.check( );
	}
	componentDidMount( ){
		this.rename( );

		this.build( );

		this.mount( );

		this.bound( );

		this.check( );

		this.attach( );
	}
	componentWillUnmount( ){
		this.unmount( );

		this.disconnect( );

		this.detach( );
	}
};

export default Component;
