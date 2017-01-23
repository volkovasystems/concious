import React, { Component } from 'react'


export default  class TestControlStatus extends Component {
    render() {
        return (
            <div>
                <Control
                    status="success"
				    icon="fa fa-home"
                    notice="This is a notice"
                    title="Success">
                    Success
			</Control>
                <Control
                    status="failed"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={ true }>
                    Failed
			</Control>
                <Control
                    status="warning"
                    notice="This is a notice"
                    >Warning
			</Control>
                <Control
                    status="issue"
                    title="Issue">
                    Issue
			</Control>
                <Control
                    status="fatal"
                    icon="fa fa-bus">
                    Fatal
			</Control>
                <Control
                    status="unknown"
                    icon="fa fa-map">
                    Unknown
			</Control>
                <Control
                    status="prompt"
                    loading={ true }>
                    Prompt
			</Control>
                <Control
                    status="alert"
                    icon="fa fa-shopping-cart">
                    Alert
			</Control>
                <Control
                    status="activated"
                    loading={ true }>
                    Activated
			</Control>
                <Control
                    status="deactivated"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    loading={ true }>
                    Deactivated
			</Control>
            </div>
        )
    }
}
