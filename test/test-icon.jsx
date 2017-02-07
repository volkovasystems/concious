import React, { Component } from 'react'

export default class TestIcon extends Component {
    render() {
        return (
            <div>
                <Icon set="fa fa-plane">
                </Icon>
                <Icon
                    loading={true} />
                <Icon
                    icon="fa fa-map"
                    layout="fit" />
                <Icon
                    icon="fa fa-bus"
                    edge="round" />
                <Icon
                    set="fa fa-cog"
                    layout="spread">
                </Icon>
                <Icon
                    edge="round"
                    image="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png" />
                <Icon
                    layout="fit"
                    image="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png" />
                <Icon
                    edge="soft"
                    image="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png" />
                <Icon
                    layout="spread"
                    image="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png" />
            </div>
        )
    }
}
