var MainPage = React.createClass( {
	"mixins": [
		ComponentMixin,

		PageMixin
	],

	"render": function onRender( ){
		return; //: @template: template/main-page.html
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

Component( "main-page" ).load( "section[main-page]", <MainPage /> );
