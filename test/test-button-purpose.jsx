import React, { Component } from 'react'

export default class TestButtonPurpose extends Component {
    render() {
        return (
            <div>
                <Button
                    purpose="positive"
                    notice="This is a notice"
                    title="Purpose">Positive
                </Button>
                <Button
                    purpose="negative"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}>Negative
                </Button>
                <Button
                    purpose="immediate"
                    notice="This is a notice">Immediate
                </Button>
                <Button
                    purpose="priority"
                    icon="fa fa-map">Priority</Button>
                <Button
                    purpose="secondary"
                    loading={true}>Secondary</Button>
                <Button
                    purpose="normal"
                    icon="fa fa-plus-circle"
                    notice="This is a notice">Normal</Button>
                <Button
                    purpose="optional"
                    icon="fa fa-map"
                    title="Purpose">Optional</Button>
            </div>
        )
    }
}
