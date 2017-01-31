import React, { Component } from 'react'

export default class TestListInput extends Component {
    render() {
        return (
            <div>
                <ListInput
                    name="fruit"
                    change={(name, value) => { console.log(name, value) } }
                    notice="Input your first name."
                    notice="Input list of fruits."
                    status="test"
                    />
            </div>
        )
    }
}
