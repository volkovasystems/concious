var TextInput = React.createClass( {
	"type": "text-input",

	"mixins": [
		ComponentMixin,

		InputMixin,
		SizeMixin
	],

	"focus": function focus( ){
		this.getElement( ).addClass( "hover up" );
		this.label.getElement( ).addClass( "hover up" );

		if( this.props.input ){
			this.hidePlaceholder( );
		
		}else{
			this.showPlaceholder( );
		}

		this.props.focus( );
	},

	"blur": function blur( ){
		if( !this.props.input ){
			this.getElement( ).removeClass( "hover up" );
			this.label.getElement( ).removeClass( "hover up" );
		}

		this.hidePlaceholder( );
		
		this.props.blur( );
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-text-input={ this.props.name }
				className={ this.type }>
				<InputLabel
					id="label"
					name={ this.props.name }
					label={ this.props.label }
					
					size={ this.props.size }>
				</InputLabel>
				<Input
					id="input"
					name={ this.props.name }

					placeholder={ this.props.placeholder }
					title={ this.props.title }

					input={ this.props.input }

					update={ this.props.update }
					click={ this.props.click }

					focus={ this.focus }
					blur={ this.blur }

					size={ this.props.size }>
				</Input>
			</div>
		);
	}
} );
