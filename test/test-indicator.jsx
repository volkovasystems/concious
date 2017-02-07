import React, { Component } from 'react'

export default class TestIndicator extends Component {
    render() {
        return (
            <div>
                <TextInput
                    status="success"
                    name="Success"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="failed"
                    name="Failed"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="warning"
                    name="Warning"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="issue"
                    name="Issue"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="fatal"
                    name="Fatal"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="unknown"
                    name="Unknown"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="prompt"
                    name="Prompt"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="alert"
                    name="Alert"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="activated"
                    name="Activated"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
                <TextInput
                    status="deactivated"
                    name="Deactivatedt"
                    placeholder="Sample Placeholder"
                    notice="Sample Notice">
                </TextInput>
            </div>
        )
    }
}