import React, {Component} from 'react'

export default class TestPlayground extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render () {
		var style = {
			color: 'grey',
			fontSize: 13
		}
		return (
			<div>
				<h3>Playground</h3>
				<Button
                    purpose="positive"
                    notice="This is a notice"
                    title="Purpose">Positive
                </Button>
                <Button
                    purpose="negative"
                    icon="fa fa-home"
                    notice="This is a notice"
                    loading={true}>Negative
                </Button>
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
