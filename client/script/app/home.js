var Home = React.createClass( {
	"mixins": [
		ComponentMixin
	],

	"render": function onRender( ){
		return; //: @template: template/home.html
	},

	"getInitialState": function getInitialState( ){
		return {
			
		};
	},

	"componentDidMount": function componentDidMount( ){
		this.show( );
	}
} );

Component( "home" ).load( "section[home]", <Home /> );
