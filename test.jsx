
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import "./concious.js";

import TestApp from './test/test-app.js';
import TestButtonStatus from './test/test-button-status.js';
import TestButtonPurpose from './test/test-button-purpose.js';
import TestControl from './test/test-control.js';


const app = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={TestApp}>
			<IndexRoute></IndexRoute>
			<Route path="test-button-status" component={TestButtonStatus}></Route>
			<Route path="test-button-purpose" component={TestButtonPurpose}></Route>
			<Route path="test-control" component={TestControl}></Route>
		</Route>
	</Router>, app)
