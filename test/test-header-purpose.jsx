import React, {Component} from 'react'

export default  class TestHeaderPurpose extends Component {
    render () {
        return (
            <div>
                <h3>Header Purpose</h3>
                <Header
                    purpose="positive"
                    icon="fa fa-bus"
                    notice="This is a notice"
                    title="Purpose">Positive
			</Header>
                <Header
                    purpose="negative"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}>Negative
			</Header>
                <Header
                    purpose="immediate"
                    notice="This is a notice"
                    >Immediate
			</Header>
                <Header
                    purpose="priority"
                    icon="fa fa-map"
                    >Priority
			</Header>
                <Header
                    purpose="secondary"
                    loading={true}
                    >Secondary
			</Header>
                <Header
                    purpose="normal"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    >Normal
			</Header>
                <Header
                    purpose="optional"
                    icon="fa fa-map"
                    title="Purpose"
                    notice="This is a notice"
                    >Optional
			</Header>
            </div>
        )
    }
}
