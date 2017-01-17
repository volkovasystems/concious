"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"$": "jquery",
			"React": "react",
			"ReactDOM": "react-dom",
		}
	@end-include
*/

import clazof from "clazof";
import doubt from "doubt";
import een from "een";
import protype from "protype";
import shardize from "shardize";
import snapd from "snapd";
import truu from "truu";

import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Component extends React.Component {
	constructor( property ){
		super( property );

		this.state = { };

		this.type = [ "component" ];

		this.children = [ ];

		this.name = shardize( property.name || this.name || this.constructor.name );

		this.set( property );
	}

	/*;
		@method-documentation:
			This will act as hover and focus handler.
		@end-method-documentation
	*/
	focus( event ){
		if( this.component ){
			this.component.addClass( "focus" );
		}

		if( this.property && typeof this.property.focus === "function" ){
			this.property.focus( this, event );
		}
	}
	rest( event ){
		if( this.component ){
			this.component.removeClass( "focus" );
		}

		if( this.property && typeof this.property.rest === "function" ){
			this.property.rest( this, event );
		}
	}
	press( event ){
		if( this.component ){
			this.component.addClass( "press" );
		}

		if( this.property && typeof this.property.press === "function" ){
			this.property.press( this, event );
		}
	}
	release( event ){
		if( this.component ){
			this.component.removeClass( "press" );
		}

		if( this.property && typeof this.property.release === "function" ){
			this.property.release( this, event );
		}
	}
	click( event ){
		this.press( );

		snapd.bind( this )( function onTimeout( ){
			this.release( );
		} );

		if( this.property && typeof this.property.click === "function" ){
			this.property.click( this, event );
		}
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

		this.refresh( )
	}
	set( property ){
		if( protype( property, OBJECT ) && truu( property ) ){
			this.property = property;

			snapd.bind( this )( function onTimeout( ){
				this.setState( this.property );
			} );
		}
	}
	get( name ){
		if( typeof name === "string" && name ){
			return this.state[ name ];

		}else{
			return this.state;
		}
	}
	refresh( ){
		this.set( this.property );
	}

	bindName( ){
		if( this.component ){
			snapd.bind( this )( function onTimeout( ){
				this.component.attr( "name", this.name );
			} );
		}
	}
	bindID( ){
		this.id = [ this.name, Math.ceil( Date.now( ) * Math.random( ) ) ].join( "-" );

		if( this.component ){
			snapd.bind( this )( function onTimeout( ){
				this.component.attr( "id", this.id );
			} );
		}
	}
	bindClass( ){
		if( this.component ){
			snapd.bind( this )( function onTimeout( ){
				this.component.addClass( this.type.join( " " ) );
			} );
		}
	}
	bindCategory( ){
		if( this.component && this.property && this.property.category ){
			snapd.bind( this )( function onTimeout( ){
				this.component.addClass( this.property.category );
			} );
		}
	}
	bindParent( ){
		let parent = this;

		let children = this.state.children;

		if( doubt( children, ARRAY ) ){
			children.forEach( ( child ) => {
				if( clazof( child, Component ) ){
					child.register( parent );
				}
			} );
		}

		this.component.children( ).map( function onEachChild( ){
			let child = $( this ).data( "instance" );

			if( clazof( child, Component ) ){
				child.register( parent );
			}
		} );
	}
	addClass( type ){
		this.type.push( type );

		this.bindClass( );
	}
	removeClass( type ){
		this.type = this.type.filter( ( name ) => { return name !== type; } );

		this.bindClass( );
	}
	resetClass( ){
		if( this.component ){
			this.component.removeClass( );
		}
	}

	initialize( ){
		this.rename( this.property.name || this.name );

		this.addClass( this.name );

		this.build( );

		this.mount( );

		this.bound( );
	}
	build( ){
		this.component = $( ReactDOM.findDOMNode( this ) );

		this.component.data( "instance", this );
	}
	bound( ){
		this.bindName( );

		this.bindID( );

		this.bindClass( );

		this.bindCategory( );

		this.bindParent( );
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
		this.set( property );
	}
	componentDidUpdate( ){
		this.build( );

		this.update( );

		this.bound( );
	}
	componentDidMount( ){
		this.initialize( );
	}
};

export default Component;
