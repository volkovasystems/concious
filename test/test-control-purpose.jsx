import React, { Component } from 'react'

export default class TestControlPurpose extends Component {
    render() {
        return (
            <div>
                <Control
                    purpose="positive"
                    icon="fa fa-bus"
                    notice="This is a notice"
                    title="Purpose">Positive
			</Control>
                <Control
                    purpose="negative"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}>Negative
			</Control>
                <Control
                    purpose="immediate"
                    notice="This is a notice"
                    >Immediate
			</Control>
                <Control
                    purpose="priority"
                    icon="fa fa-map"
                    >Priority
			</Control>
                <Control
                    purpose="secondary"
                    loading={true}
                    >Secondary
			</Control>
                <Control
                    purpose="normal"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    >Normal
			</Control>
                <Control
                    purpose="optional"
                    icon="fa fa-map"
                    title="Purpose"
                    notice="This is a notice"
                    >Optional
			</Control>
            </div>
        )
    }
}
