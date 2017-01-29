import React, { Component } from 'react'

export default class TestRangeInput extends Component {
    render() {
        return (
            <div>
                <RangeInput
                    name="Number"
                    change={(name, value) => { console.log(name, value) } }
                    notice="Input your first name."
                    status="test">
                </RangeInput>
            </div>
        )
    }
}
