var Size = { };
harden.bind( Size )( "TINY_SIZE", "tiny size" );
harden.bind( Size )( "SMALL_AND_TINY_SIZE", "small and tiny size" );
harden.bind( Size )( "SMALL_SIZE", "small size" );
harden.bind( Size )( "NORMAL_AND_SMALL_SIZE", "normal and small size" );
harden.bind( Size )( "NORMAL_SIZE", "normal size" );
harden.bind( Size )( "LARGE_AND_NORMAL_SIZE", "large and normal size" );
harden.bind( Size )( "LARGE_SIZE", "large size" );

var SizeMixin = {
	"getDefaultProps": function getDefaultProps( ){
		return {
			"size": Size.TINY_SIZE
		};
	},

	"clearAllSizes": function clearAllSizes( ){
		$( this.getDOMNode( ) ).removeClass( [ 
			Size.TINY_SIZE,
			Size.SMALL_AND_TINY_SIZE,
			Size.SMALL_SIZE,
			Size.NORMAL_AND_SMALL_SIZE,
			Size.NORMAL_SIZE,
			Size.LARGE_AND_NORMAL_SIZE,
			Size.LARGE_SIZE
		].join( " " ) );
	},

	"setSize": function setSize( size ){
		if( size  ){
			$( this.getDOMNode( ) ).addClass( size );	
		}
	},

	"resolveSize": function resolveSize( size ){
		size = size || this.props.size;

		if( /tiny/.test( size ) ){
			return Size.TINY_SIZE;

		}else if( /small/.test( size ) &&
			/and/.test( size ) &&
			/tiny/.test( size ) )
		{
			return Size.SMALL_AND_TINY_SIZE;

		}else if( /small/.test( size ) ){
			return Size.SMALL_SIZE;

		}else if( /normal/.test( size ) ){
			return Size.NORMAL_SIZE;

		}else if( /large/.test( size ) ){
			return Size.LARGE_SIZE;

		}else{
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