import React, { Component } from 'react'

export default class TestHeaderStatus extends Component {
    render() {
        return (
            <div>
                <h3>Header Status</h3>
                <Header
                    status="success"
				    icon="fa fa-home"
                    notice="This is a notice"
                    title="Success">
                    Success
			</Header>
                <Header
                    status="failed"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={ true }>
                    Failed
			</Header>
                <Header
                    status="warning"
                    notice="This is a notice"
                    >Warning
			</Header>
                <Header
                    status="issue"
                    title="Issue">
                    Issue
			</Header>
                <Header
                    status="fatal"
                    icon="fa fa-bus">
                    Fatal
			</Header>
                <Header
                    status="unknown"
                    icon="fa fa-map">
                    Unknown
			</Header>
                <Header
                    status="prompt"
                    loading={ true }>
                    Prompt
			</Header>
                <Header
                    status="alert"
                    icon="fa fa-shopping-cart">
                    Alert
			</Header>
                <Header
                    status="activated"
                    loading={ true }>
                    Activated
			</Header>
                <Header
                    status="deactivated"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    loading={ true }>
                    Deactivated
			</Header>
            </div>
        )
    }
}
