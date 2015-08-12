var ComponentMixin = {
	"mixins": [
		FocusMixin,
		BlurMixin,
		ClickMixin,
		StateChangeMixin,
		ClearStateMixin,
		ShowHideMixin
	],

	"getDefaultProps": function getDefaultProps( ){
		return {
			//: This will be used to reference the element of the component.
			"id": "",
			//: The name refers to the usage name of the component.
			"name": "",
			"component": this
		};
	},

	"getID": function getID( ){
		return this.props.id || this.props.name || this.type;
	},

	"getType": function getType( ){
		return this.type || "component";
	},

	"getElement": function getElement( ){
		return $( this.getDOMNode( ) );
	},

	"componentWillMount": function componentWillMount( ){
		this.event = new Edo( );
	},

	"componentDidMount": function componentDidMount( ){
		this.getElement( ).data( "self", this );

		setImmediate( ( function onImmediate( ){
			if( this.getID( ) ){
				var parentComponent = this.getElement( )
					.parent( )
					.closest( "[data-component]" )
					.data( "self" );

				if( parentComponent ){
					var componentName = S( this.getID( ) ).camelize( ).toString( );

					harden.bind( parentComponent )( componentName, this );

					this.parent = parentComponent;

					var eventName = [ "component-loaded", this.getID( ) ].join( ":" );

					parentComponent.event.emit( eventName );
				}
			}
		} ).bind( this ) );
	}
};
