import React, { Component } from 'react'

export default class TestRangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var style = {
            color: 'grey',
            fontSize: 200
        }
        return (
            <div>
                <RangeInput
                    name="Number"
                    change={(name, value) => { this.setState({ 'value': value }) } }
                    notice="Input your first name."
                    status="test">
                </RangeInput>
                <div >
                    <Label
                        style={style}
                        text={this.state.value}></Label>
                </div>
            </div>
        )
    }
}
