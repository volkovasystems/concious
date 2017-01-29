import React, { Component } from 'react'

export default class TestSelect extends Component {
    render() {
        return (
            <div>
                <h3>Select</h3>
                <Select
                    header={{
                        "icon": "fa fa-home",
                        "label": "List of Fruits"
                        
                    }}

                    list={[
                        {
                            "value": "Orange"
                        },
                        {
                            "value": "Peach"
                        },
                        {
                            "value": "Apple"
                        },
                        {
                            "value": "Banana"
                        },
                        {
                            "value": "Mango"
                        }
                    ]}
                    >

                </Select>
            </div>
        )
    }
}
