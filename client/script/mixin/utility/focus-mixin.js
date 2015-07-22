var FocusMixin = {
    "getDefaultProps": function getDefaultProps( ){
        return {
            "focus": function focus( ){ }
        };
    },

    "getInitialState": function getInitialState( ){
        return {
            "focus": false
        };
    }
};
