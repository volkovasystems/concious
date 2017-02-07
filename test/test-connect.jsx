import React, { Component } from "react";
import Connect from "connect";

export default  class TestConnect extends Component {
	render( ){
		return ( <div>
					<Connect
						icon="fa fa-facebook"
						title="Redirect"
						notice="You will be redirected to Facebook"
						url="https://facebook.com"
					>
						Facebook
					</Connect>
				</div> );
	}
}
