
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import "./concious.js";

import TestApp from './test/test-app.js';
import TestButtonStatus from './test/test-button-status.js';
import TestButtonPurpose from './test/test-button-purpose.js';
import TestControlStatus from './test/test-control-status.js';
import TestControlPurpose from './test/test-control-purpose.js';
import TestHeaderStatus from './test/test-header-status.js';
import TestHeaderPurpose from './test/test-header-purpose.js';
import TestPlateStatus from './test/test-plate-status.js';
import TestPlatePurpose from './test/test-plate-purpose.js';
import TestIcon from './test/test-icon.js';


const app = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={TestApp}>
			<IndexRoute></IndexRoute>
			<Route path="test-button-status" component={TestButtonStatus}></Route>
			<Route path="test-button-purpose" component={TestButtonPurpose}></Route>
			<Route path="test-control-status" component={TestControlStatus}></Route>
			<Route path="test-control-purpose" component={TestControlPurpose}></Route>
			<Route path="test-header-status" component={TestHeaderStatus}></Route>
			<Route path="test-header-purpose" component={TestHeaderPurpose}></Route>
			<Route path="test-plate-status" component={TestPlateStatus}></Route>
			<Route path="test-plate-purpose" component={TestPlatePurpose}></Route>
			<Route path="test-icon" component={TestIcon}></Route>
		</Route>
	</Router>, app)
