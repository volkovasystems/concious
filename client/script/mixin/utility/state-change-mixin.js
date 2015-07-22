var StateChangeMixin = {
	"change": function change( event ){
		var state = { };

		state[ event.target.name ] = event.target.value;

		this.setState( state );
	}
};
