import React, { Component } from 'react'

export default class TestTextInput extends Component {
    render() {
        return (
            <div>
                <TextInput
                    name="This is a name"
                    type="text"
                    placeholder="Test Text Input"
                    status="success">
                </TextInput>
            </div>
        )
    }
}
