import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Single from './templates/single';
// import Archive from './templates/Archive';
// import Notfound from './templates/Notfound';
import './styles/index.scss';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			{/* <Route path='/' copmonnet={App}/> */}
			<Route exact path='/' component={App} />
			{/* <Route path='/post/:slug' component={Single} />
			<Route path='/page/:slug' component={Single} />
			<Route path='/search/:term' component={Archive} />
			<Route component={Notfound} /> */}
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
