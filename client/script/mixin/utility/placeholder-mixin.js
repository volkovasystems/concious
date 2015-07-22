var PlaceholderMixin = {
    "getDefaultProps": function getDefaultProps( ){
        return {
            "placeholder": ""
        };
    },

    "showPlaceholder": function showPlaceholder( ){
        $( "[instruction]", this.getElement( ) )
            .attr( "placeholder", this.props.placeholder );
    },

    "hidePlaceholder": function hidePlaceholder( ){
        $( "[instruction]", this.getElement( ) )
            .removeAttr( "placeholder" );
    },

    "componentDidMount": function componentDidMount( ){
        $( "[placeholder]", this.getElement( ) )
            .attr( "instruction", this.props.placeholder );

        this.hidePlaceholder( );
    }
};
