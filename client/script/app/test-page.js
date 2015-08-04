var TestPage = React.createClass( {
	"mixins": [
		ComponentMixin
	],

	"render": function onRender( ){
		return; //: @template: template/test-page.html
	},

	"componentDidMount": function componentDidMount( ){
		this.show( );
	}
} );

Component( "test-page" ).load( "section[test-page]", <TestPage /> );
