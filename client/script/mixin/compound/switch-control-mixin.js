var SwitchControlMixin = {
	"turnOn": function turnOn( ){
		this.onSwitch.getElement( )
			.addClass( "hidden" )
			.removeClass( "shown" );

		this.offSwitch.getElement( )
			.addClass( "shown" )
			.removeClass( "hidden" );
	},

	"turnOff": function turnOff( ){
		this.onSwitch.getElement( )
			.addClass( "shown" )
			.removeClass( "hidden" );

		this.offSwitch.getElement( )
			.addClass( "hidden" )
			.removeClass( "shown" );
	},

	"switchOn": function switchOn( ){
		this.turnOn( );

		this.props.switchOn.apply( null, _.toArray( arguments ) );
	},

	"switchOff": function switchOff( ){
		this.turnOff( );

		this.props.switchOff.apply( null, _.toArray( arguments ) );
	},

	"getDefaultProps": function getDefaultProps( ){
		return {
			"status":"off",
			"onName": "",
			"offName": "",
			"onLabel": "",
			"offLabel": "",
			"switchOn": function switchOn( ){ },
			"switchOff": function switchOff( ){ }
		};
	},

	"componentDidMount": function componentDidMount( ){
		this.event.on( [
				"child-loaded:off-switch",
				"child-loaded:on-switch"
			],
			( function onLoadSwitches( ){
				if( this.props.status === "off" ){
					this.turnOff( );

				}else if( this.props.status === "on" ){
					this.turnOn( );
				}
			} ).bind( this ) ); 
	}
};
