var List = React.createClass( {
	"type": "list",

	"mixins": [
		ComponentMixin,

		ListMixin,
		ScrollbarMixin,
		SizeMixin
	],

	"onEachListItem": function onEachListItem( item ){
		var itemDOM = this.props.onEachListItem( item );

		if( _.isEmpty( itemDOM ) ){
			return (
				<div
					key={ item }
					data-list-item={ this.props.name }
					className="list-item">
					<Label
						name={ item }
						label={ item }>
					</Label>
				</div>
			);

		}else{
			return itemDOM;
		}
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-list={ this.props.name }
				className={ this.type }>
				<div
					data-scrollbar
					className="scrollbar">
					<div
						data-item-list
						className="item-list">
						{ this.props.items.map( this.onEachListItem ) }
					</div>
				</div>
			</div>
		);
	}
} );
