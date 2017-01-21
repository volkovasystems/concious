import React, { Component } from 'react'

export default class TestButtonPurpose extends Component {
    render() {
        return (
            <div>
                <Button status="positive">Positive</Button>
                <Button status="negative">Negative</Button>
                <Button status="immediate">Immediate</Button>
                <Button status="priority">Priority</Button>
                <Button status="secondary">Secondary</Button>
                <Button status="normal">Normal</Button>
                <Button status="optional">Optional</Button>
            </div>
        )
    }
}
