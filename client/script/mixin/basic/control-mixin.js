var ControlMixin = {
    "click": function click( event ){
        this.props.click( event );
    },

    "getDefaultProps": function getDefaultProps( ){
        return {
            "text": ""
        }
    }
};
