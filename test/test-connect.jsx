import React, {Component} from 'react'

export default  class TestLink extends Component {
	render( ){
		return (
			<div>
				<Link
					purpose="positive"
					icon="fa fa-bus"
					notice="This is a notice"
					title="Purpose">
					This is a link
				</Link>
			</div>
		)
	}
}
