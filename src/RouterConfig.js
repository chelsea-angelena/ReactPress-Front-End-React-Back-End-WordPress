import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Post from './pages/Post';
// import Archive from './pages/Archive';
import Notfound from './pages/Notfound';
import PostList from './pages/PostList';
// import Gallery from './partials/Gallery';
// import CreatePost from './pages/CreatePost';
import './styles/index.scss';
import App from './App';
import Page from './pages/Page';
import PostDetails from './pages/PostDetails';

export default function RouterConfig() {
	const routes = [
		{
			path: '/',
			exact: true,
			component: App,
		},
		{
			path: '/pages',
			component: App,
		},
		{
			path: '/posts',
			components: PostList,
			routes: [
				{
					path: '/posts/:id',
					component: PostDetails,
				},
			],
		},
	];

	return (
		<div>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
				{/* <Route path='/posts/:slug' component={PostDetails} />
				<Route exact path='/posts' component={PostList} />

				{/* <Route path='/page/:slug' component={Page} /> */}
				{/* <Route path='/newpost' component={CreatePost} /> */}
				{/* <Route exact path='/gallery' component={Gallery} /> */}

				{/* <Route exact path='/' component={App} />
				<Route component={Notfound} path='*' /> */}
			</Switch>
		</div>
	);
}
function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	);
}
