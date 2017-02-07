import React, {Component} from 'react'

export default  class TestPlatePurpose extends Component {
	render () {
		return (
			<div>
				<Plate
					purpose="positive"
					icon="fa fa-bus"
					notice="This is a notice"
					title="Purpose">Positive
			</Plate>
				<Plate
					purpose="negative"
					icon="fa fa-home"
					notice="This is a notice"
					loading={true}>Negative
			</Plate>
				<Plate
					purpose="immediate"
					notice="This is a notice"
					>Immediate
			</Plate>
				<Plate
					purpose="priority"
					icon="fa fa-map"
					>Priority
			</Plate>
				<Plate
					purpose="secondary"
					loading={true}
					>Secondary
			</Plate>
				<Plate
					purpose="normal"
					icon="fa fa-plus-circle"
					notice="This is a notice"
					>Normal
			</Plate>
				<Plate
					purpose="optional"
					icon="fa fa-map"
					title="Purpose"
					notice="This is a notice"
					>Optional
			</Plate>
			</div>
		)
	}
}
