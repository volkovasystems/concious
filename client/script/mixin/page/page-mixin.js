var PageMixin = {
	"mixins": [
		PageTraversalMixin
	],

    "componentDidMount": function componentDidMount( ){
        var element = $( this.getDOMNode( ) );

        this.page = PageComponent( this );
    }
};
