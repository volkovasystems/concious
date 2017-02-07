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
					image="https://developers.google.com/web/images/web-fundamentals-icon192x192.png" />
				<Icon
					layout="fit"
					image="https://developers.google.com/web/images/web-fundamentals-icon192x192.png" />
				<Icon
					edge="soft"
					image="https://developers.google.com/web/images/web-fundamentals-icon192x192.png" />
				<Icon
					layout="spread"
					image="https://developers.google.com/web/images/web-fundamentals-icon192x192.png" />
			</div>
		)
	}
}
