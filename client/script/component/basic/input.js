var Input = React.createClass( {
	"type": "input",

	"mixins": [
		ComponentMixin,

		InputMixin,
		PlaceholderMixin,
		SizeMixin
	],

	"blur": function blur( ){
		this.hidePlaceholder( );

		this.props.blur( );
	},

	"focus": function focus( ){
		this.showPlaceholder( );

		this.props.focus( );
	},

	"update": function update( event ){
		this.props.update( EventWrapper( event ) );
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-input={ this.props.name }
				className={ this.type }>
				<input
					type={ this.props.format }

					name={ this.props.name }
					title={ this.props.title }
					placeholder={ this.props.placeholder }

					value={ this.props.input }

					onFocus={ this.focus }
					onBlur={ this.blur }
					onChange={ this.update }/>
			</div>
		);
	}
} );
