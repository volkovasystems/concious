import React, { Component } from 'react'
import { Link } from "react-router";

export default class TestApp extends Component {
	render() {
		return (
			<div
				className="menu-wrapper">
				<h1>
					<Link to="/">Biyaheroes Test Menu</Link>
				</h1>
				<nav id="primary_nav_wrap">
					<ul>
						<li><a href="#">Buttons</a>
							<ul>
								<li><Link to="test-button-status">Status</Link></li>
								<li><Link to="test-button-purpose">Purpose</Link></li>
							</ul>
						</li>
						<li><a href="#">Controls</a>
							<ul>
								<li><Link to="test-control-status">Status</Link></li>
								<li><Link to="test-control-purpose">Purpose</Link></li>
							</ul>
						</li>
						<li><Link to="test-icon">Icon</Link></li>
						<li><a href="#">Header</a>
							<ul>
								<li><Link to="test-header-status">Status</Link></li>
								<li><Link to="test-header-purpose">Purpose</Link></li>
							</ul>
						</li>
						<li><a href="#">Plates</a>
							<ul>
								<li><Link to="test-plate-status">Status</Link></li>
								<li><Link to="test-plate-purpose">Purpose</Link></li>
							</ul>
						</li>
						<li>
							<Link to="test-item">Item</Link>
						</li>
						<li>
							<Link to="test-list">List</Link>
						</li>
						<li>
							<Link to="test-select">Select</Link>
						</li>
						<li>
							<Link to="test-input">Inputs</Link>
							<ul>
								<li><Link to="test-note-input">Note Input</Link></li>
								<li><Link to="test-range-input">Range Input</Link></li>
								<li><Link to="test-toggle-input">Toggle Input</Link></li>
								<li><Link to="test-text-input">Text Input</Link></li>
								<li><Link to="test-list-input">List Input</Link></li>
							</ul>
						</li>
						<li>
							<Link to="test-indicator">Indicator</Link>
						</li>
						<li>
							<Link to="test-connect">Connect</Link>
						</li>
					</ul>

				</nav>
				{this.props.children}
			</div>

		)
	}
}
