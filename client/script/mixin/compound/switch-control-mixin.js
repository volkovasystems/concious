var SwitchControlMixin = {
	"turnOn": function turnOn( ){
		this.onSwitch.getElement( )
			.addClass( "hidden" )
			.removeClass( "shown" );

		this.offSwitch.getElement( )
			.addClass( "shown" )
			.removeClass( "hidden" );
	},

	"switchOn": function switchOn( ){
		this.turnOn( );

		this.props.switchOn.apply( null, _.toArray( arguments ) );
	},

	"turnOff": function turnOff( ){
		$( "#off-switch", this.getElement( ) )
			.addClass( "hidden" )
			.removeClass( "shown" );

		$( "#on-switch", this.getElement( ) )
			.addClass( "shown" )
			.removeClass( "hidden" );
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
			"onIcon": "",
			"offIcon": "",
			"switchOn": function switchOn( ){ },
			"switchOff": function switchOff( ){ }
		}
	},

	"componentDidMount": function componentDidMount( ){
		if( this.props.status === "off" ){
			this.turnOff( );

		}else if( this.props.status === "on" ){
			this.turnOn( );
		}
	}
};
