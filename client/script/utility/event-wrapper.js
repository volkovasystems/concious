var EventWrapper = function EventWrapper( name, value ){
	if( arguments.length == 1 && 
		"target" in arguments[ 0 ] &&
		"name" in arguments[ 0 ].target &&
		"value" in arguments[ 0 ].target )
	{
		return EventWrapper( arguments[ 0 ].target.name, arguments[ 0 ].target.value );

	}else if( this instanceof EventWrapper ){
        this.target = {
            "name": llamalize( name ),
            "value": value
        };

    }else{
        return new EventWrapper( name, value );
    }
};
