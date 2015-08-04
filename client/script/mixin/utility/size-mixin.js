var SizeMixin = {
	"TINY_SIZE": "tiny-size",
	"SMALL_SIZE": "small-size",
	"NORMAL_SIZE": "normal-size",
	"LARGE_SIZE": "large-size",

	"getDefaultProps": function getDefaultProps( ){
		return {
			"size": this.NORMAL_SIZE
		};
	},

	"clearAllSizes": function clearAllSizes( ){
		$( this.getDOMNode( ) ).removeClass( [ 
			this.TINY_SIZE,
			this.SMALL_SIZE,
			this.NORMAL_SIZE,
			this.LARGE_SIZE
		].join( " " ) );
	},

	"setSize": function setSize( size ){
		if( size  ){
			$( this.getDOMNode( ) ).addClass( size );	
		}
	},

	"resolveSize": function resolveSize( size ){
		size = size || this.props.size;
		
		switch( size ){
			case /tiny/.test( size ):
				return this.TINY_SIZE;

			case /small/.test( size ):
				return this.SMALL_SIZE;

			case /normal/.test( size ):
				return this.NORMAL_SIZE;

			case /large/.test( size ):
				return this.LARGE_SIZE;

			default:
				return "";
		}
	},

	"applySize": function applySize( size ){
		this.clearAllSizes( );

		this.setSize( this.resolveSize( size ) );
	},

	"componentDidMount": function componentDidMount( ){
		this.applySize( );	
	}
}