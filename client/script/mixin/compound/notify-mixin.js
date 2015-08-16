var NotifyMixin = {
	"NORMAL_STATUS": "normal status",
	"INFORM_STATUS": "inform status",
	"SUCCESS_STATUS": "success status",
	"WARNING_STATUS": "warning status",
	"ERROR_STATUS": "error status",

	"getDefaultProps": function getDefaultProps( ){
		return {
			"status": "",
			"description": ""
		};
	},

	"clearAllStatuses": function clearAllStatuses( ){
		$( this.getDOMNode( ) ).removeClass( [ 
			this.NORMAL_STATUS,
			this.INFORM_STATUS,
			this.SUCCESS_STATUS,
			this.WARNING_STATUS,
			this.ERROR_STATUS
		].join( " " ) );
	},

	"setStatus": function setStatus( status ){
		if( status ){
			$( this.getDOMNode( ) ).addClass( status );	
		}
	},

	"resolveStatus": function resolveStatus( status ){
		status = status || this.props.status;
		
		switch( status ){
			case /normal/.test( status ):
				return this.NORMAL_STATUS;

			case /small/.test( status ):
				return this.INFORM_STATUS;

			case /normal/.test( status ):
				return this.SUCCESS_STATUS;

			case /warning/.test( status ):
				return this.WARNING_STATUS;

			case /error/.test( status ):
				return this.ERROR_STATUS;

			default:
				return "";
		}
	},

	"applyStatus": function applyStatus( status ){
		this.clearAllStatuses( );

		this.setStatus( this.resolveStatus( status ) );
	},

	"componentDidUpdate": function componentDidUpdate( prevProps ){
		if( this.props.status != prevProps.status ){
			this.applyStatus( );
		}
	}
}