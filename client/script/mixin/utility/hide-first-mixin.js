var HideFirstMixin = {
	"componentDidMount": function componentDidMount( ){
		if( "hide" in this &&
			typeof this.hide == "function" )
		{
			this.hide( );
		
		}else{
			$( this.getDOMNode( ) )
				.removeClass( "shown" )
				.addClass( "hidden" );
		}
	}
};