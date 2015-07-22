var List = React.createClass( {
    "type": "list",

    "mixins": [
        ComponentMixin,

        ListMixin,
        ScrollbarMixin
    ],

    "render": function render( ){
        return (
            <div
                id={ this.getID( ) }
                data-component
                data-list={ this.props.name }
                className={ this.type }>
                <div
                    data-scrollbar>
                    <div
                        data-list-items
                        data-align-vertical>
                        { this.props.items.map( this.props.onEachListItem ) }
                    </div>
                </div>
            </div>
        );
    }
} );
