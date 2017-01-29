import React, { Component } from 'react'

export default class TestList extends Component {
    render() {
        return (
            <div>
                <h3>List</h3>
                <List
                    header={{
                        "icon": "fa fa-home",
                        "label": "List of Fruits",
                        "description": "This is a description"
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
                        },
                        {
                            "value": "Blueberry"
                        },
                        {
                            "value": "Avocado"
                        },
                        {
                            "value": "Apple"
                        },
                        {
                            "value": "Blackberry"
                        },
                        {
                            "value": "Lychee"
                        }
                    ]}
                    />
            </div>
        )
    }
}
