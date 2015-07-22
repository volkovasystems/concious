var Icon = React.createClass( {
    "type": "icon",

    "mixins": [
		ComponentMixin,

        IconMixin
	],

    "render": function render( ){
        return (
			<div
                id={ this.getID( ) }
                data-component
				data-icon={ this.props.name }
                className={ this.type }>
				<i
                    className="material-icons">
                    { this.props.icon }
                </i>
			</div>
        );
    }
} );
