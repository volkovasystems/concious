/*:
	@todo:
		Input component for shown passphrase
			should not be accessible internally.
			It can only be shown and cannot be
			transferrable.
	@end-todo
*/
var PassphraseInput = React.createClass( {
	"type": "passphrase-input",

	"mixins": [
		ComponentMixin,

		InputMixin,
		SizeMixin
	],

	"showPassphrase": function showPassphrase( ){
		this.shownPassphrase.getElement( )
			.addClass( "shown" )
			.removeClass( "hidden" );
		
		this.hiddenPassphrase.getElement( )
			.removeClass( "shown" )
			.addClass( "hidden" );
	},

	"hidePassphrase": function hidePassphrase( ){
		this.hiddenPassphrase.getElement( )
			.addClass( "shown" )
			.removeClass( "hidden" );
		
		this.shownPassphrase.getElement( )
			.removeClass( "shown" )
			.addClass( "hidden" );
	},

	"focus": function focus( ){
		this.getElement( ).addClass( "hover up" );
		this.label.getElement( ).addClass( "hover up" );

		this.props.focus( );
	},

	"blur": function blur( ){
		if( !this.props.input ){
			this.getElement( ).removeClass( "hover up" );
			this.label.getElement( ).removeClass( "hover up" );
		}
		
		this.props.blur( );
	},

	"render": function render( ){
		return (
			<div
				id={ this.getID( ) }
				data-component
				data-passphrase-input={ this.props.name }
				className={ this.type }>

				<InputLabel
					id="label"

					name={ this.props.name }
					label={ this.props.label }

					size={ this.props.size }>
				</InputLabel>

				<Input
					id="hidden-passphrase"

					format="password"
					name={ this.props.name } 
					title={ this.props.title }
					placeholder={ this.props.placeholder }

					input={ this.props.input }

					update={ this.props.update }
					click={ this.props.click }

					focus={ this.focus }
					blur={ this.blur }

					size={ this.props.size }>
				</Input>

				<Input
					id="shown-passphrase"
					
					name={ this.props.name }
					title={ this.props.title }
					placeholder={ this.props.placeholder }
					
					input={ this.props.input }
					
					update={ this.props.update }
					click={ this.props.click }

					focus={ this.focus }
					blur={ this.blur }

					size={ this.props.size }>
				</Input>

				<SwitchLink
					name={ this.props.name }
					onName="show-password" 
					offName="hide-password"
					onLabel="Show Password"
					offLabel="Hide Password"
					switchOn={ this.showPassphrase }
					switchOff={ this.hidePassphrase }>
				</SwitchLink>
			</div>
		);
	},

	"componentDidMount": function componentDidMount( ){
		this.hidePassphrase( );
	}
} );
