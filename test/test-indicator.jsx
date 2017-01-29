import React, { Component } from 'react'

export default class TestIndicator extends Component {
    render() {
        return (
            <div>
                <div className="relative">
                    <Indicator
                        status="success">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="failed">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="warning">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="issue">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="fatal">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="unknown">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="prompt">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="alert">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="activated">
                    </Indicator>
                </div>
                <div className="relative">
                    <Indicator
                        status="deactivated">
                    </Indicator>
                </div>
            </div>
        )
    }
}