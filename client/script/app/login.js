var Login = React.createClass( {
	"mixins": [
		ComponentMixin
	],

	"render": function onRender( ){
		return; //: @template: template/login.html
	},

	"getInitialState": function getInitialState( ){
		return {
			"publicPhrase": "",
			"privatePhrase": ""
		};
	},

	"update": function update( event ){
		
	},

	"register": function register( ){
		this.components.get( "register" ).open( );
	},

	"componentDidMount": function componentDidMount( ){
		this.show( );
	}
} );

Component( "login" ).load( "section[login]", <Login /> );
