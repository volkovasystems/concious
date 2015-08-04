var Body = React.createClass( {
	"type": "body",

	"mixins": [
		ComponentMixin
	],

	"resize": function resize( ){
		var pageHeight = this.getElement( ).closest( ".page" )[ 0 ].offsetHeight;
		
		var headerHeight = $( ".header", this.getElement( ).parent( ) )[ 0 ].offsetHeight;

		var footerHeight = $( ".footer",this.getElement( ).parent( ) )[ 0 ].offsetHeight;

		var bodyHeight = pageHeight - headerHeight - footerHeight;

		this.getElement( )
			.css( {
				"margin-top": headerHeight,
				"margin-bottom": footerHeight,
				"height": bodyHeight
			} );
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-content={ this.props.name }
				className={ this.type }>
				{ this.props.children }
			</div>
		);
	},

	"componentDidMount": function componentDidMount( ){
		this.resize( );

		$( ".header", this.getElement( ).parent( ) )
			.resize( ( function onResize( ){
				this.resize( );
			} ).bind( this ) );

		$( ".footer", this.getElement( ).parent( ) )
			.resize( ( function onResize( ){
				this.resize( );
			} ).bind( this ) );

		$( window )
			.resize( ( function onResize() {
				this.resize( );
			} ).bind( this ) );
	}
} );
