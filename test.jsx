
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
import TestItem from './test/test-item.js';
import TestSelect from './test/test-select.js';
import TestInput from './test/test-input.js';
import TestList from './test/test-list.js';
import TestRangeInput from './test/test-range-input.js';
import TestTextInput from './test/test-text-input.js';
import TestNoteInput from './test/test-note-input.js';
import TestToggleInput from './test/test-toggle-input.js';
import TestListInput from './test/test-list-input.js';
import TestIndicator from './test/test-indicator.js';
import TestLayout from './test/test-layout.js';


const app = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={TestApp}>
			<Route path="test-button-status" component={TestButtonStatus}></Route>
			<Route path="test-button-purpose" component={TestButtonPurpose}></Route>
			<Route path="test-control-status" component={TestControlStatus}></Route>
			<Route path="test-control-purpose" component={TestControlPurpose}></Route>
			<Route path="test-header-status" component={TestHeaderStatus}></Route>
			<Route path="test-header-purpose" component={TestHeaderPurpose}></Route>
			<Route path="test-plate-status" component={TestPlateStatus}></Route>
			<Route path="test-plate-purpose" component={TestPlatePurpose}></Route>
			<Route path="test-item" component={TestItem}></Route>
			<Route path="test-icon" component={TestIcon}></Route>
			<Route path="test-list" component={TestList}></Route>
			<Route path="test-select" component={TestSelect}></Route>
			<Route path="test-input" component={TestInput}></Route>
			<Route path="test-range-input" component={TestRangeInput}></Route>
			<Route path="test-note-input" component={TestNoteInput}></Route>
			<Route path="test-text-input" component={TestTextInput}></Route>
			<Route path="test-list-input" component={TestTextInput}></Route>
			<Route path="test-toggle-input" component={TestToggleInput}></Route>
			<Route path="test-indicator" component={TestIndicator}></Route>
		</Route>
	</Router>, app)
