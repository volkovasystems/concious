import React, { Component } from 'react'

export default class TestIcon extends Component {
    render() {
        return (
            <div>
                <Icon
                    loading={true} />
                <Icon
                    icon="fa fa-map" />
                <Icon
                    icon="fa fa-bus"
                    edge="round" />
                <Icon
                    set="fa fa-cog"
                    layout="spread">
                </Icon>
                <Icon
                    edge="round"
                    image="https://developers.google.com/web/images/web-fundamentals-icon192x192.png" />
                <Icon 
                    edge="soft"
                    icon="fa fa-tags" />
                <Icon 
                    layout="fit"
                    icon="fa fa-exclamation-triangle" />
                <Icon 
                    edge="round"
                    icon="fa fa-plane" />
                <Icon 
                    layout="spread"
                    icon="fa fa-cc-paypal" />
            </div>
        )
    }
}
