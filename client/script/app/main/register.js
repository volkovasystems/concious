var Register = React.createClass( {
	"mixins": [
		ComponentMixin
	],

	"render": function onRender( ){
		return; //: @template: template/register.html
	},

	"getInitialState": function getInitialState( ){
		return {

		};
	},

	"update": function update( event ){
		
	},

	"componentDidMount": function componentDidMount( ){
		this.hide( );
	}
} );

Component( "register" ).load( "section[register]", <Register /> );
