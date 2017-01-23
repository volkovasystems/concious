import React, { Component } from 'react'
import { Link } from "react-router";

export default class TestApp extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <h1>Biyaheroes Test Menu</h1>
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
                        <li><a href="#">Menu 3</a></li>
                        <li><a href="#">Menu 4</a></li>
                        <li><a href="#">Menu 5</a></li>
                        <li><a href="#">Menu 6</a></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
