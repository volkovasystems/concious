import React, { Component } from 'react'

export default class TestItem extends Component {
    render() {
        return (
            <div>
                <h3>Item</h3>
                <Item
                    status="success"
                    icon="fa fa-home"
                    notice="This is a notice"
                    title="Success">
                    Success
			</Item>
                <Item
                    status="failed"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}
                    description="This is a very very long text that we need to test."
                    notice="This can be a very very long notice please read carefully." >
                    Failed
			</Item>
                <Item
                    status="warning"
                    description="This is a very very long text that we need to test."
                    notice="This can be a very very long notice please read carefully."
                    notice="This is a notice"
                    >Warning
			</Item>
                <Item
                    status="issue"
                    title="Issue">
                    Issue
			</Item>
                <Item
                    status="fatal"
                    icon="fa fa-bus">
                    Fatal
			</Item>
                <Item
                    status="unknown"
                    icon="fa fa-map">
                    Unknown
			</Item>
                <Item
                    status="prompt"
                    loading={true}>
                    Prompt
			</Item>
                <Item
                    status="alert"
                    icon="fa fa-shopping-cart">
                    Alert
			</Item>
                <Item
                    status="activated"
                    description="This is a very very long text that we need to test."
                    notice="This can be a very very long notice please read carefully."
                    loading={true}>
                    Activated
			</Item>
                <Item
                    status="deactivated"
                    icon="fa fa-plus-circle"
                    notice="This is a notice"
                    loading={true}>
                    Deactivated
			</Item>
            </div>
        )
    }
}
