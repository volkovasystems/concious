var TestPage = React.createClass( {
	"mixins": [
		ComponentMixin
	],

	"render": function onRender( ){
		return; //: @template: template/test-page.html
	},

	"update": function update( event ){
		console.debug( event );

		this.setState( {
			"firstName": event.target.value
		} );
	},

	"componentDidMount": function componentDidMount( ){
		this.show( );
	}
} );

Component( "test-page" ).load( "section[test-page]", <TestPage /> );
