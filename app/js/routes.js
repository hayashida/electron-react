import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';

import App from './containers/app';
import Home from './containers/home';

const history = createHashHistory();
render((
	<Router history={ history }>
		<App>
			<Switch>
				<Route exact path="/" component={ Home } />
			</Switch>
		</App>
	</Router>
), document.querySelector('#root'));