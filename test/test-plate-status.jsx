import React, { Component } from 'react'

export default class TestPlateStatus extends Component {
    render() {
        return (
            <div>
                <Plate
                    status="success"
                    icon="fa fa-home"
                    notice="This is a notice"
                    title="Success">
                    Success
			</Plate>
                <Plate
                    status="failed"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}>
                    Failed
			</Plate>
                <Plate
                    status="warning"
                    notice="This is a notice"
                    >Warning
			</Plate>
                <Plate
                    status="issue"
                    title="Issue">
                    Issue
			</Plate>
                <Plate
                    status="fatal"
                    icon="fa fa-bus">
                    Fatal
			</Plate>
                <Plate
                    status="unknown"
                    icon="fa fa-map">
                    Unknown
			</Plate>
                <Plate
                    status="prompt"
                    loading={true}>
                    Prompt
			</Plate>
                <Plate
                    status="alert"
                    icon="fa fa-shopping-cart">
                    Alert
			</Plate>
                <Plate
                    status="activated"
                    loading={true}>
                    Activated
			</Plate>
                <Plate
                    status="deactivated"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    loading={true}>
                    Deactivated
			</Plate>
            </div>
        )
    }
}
