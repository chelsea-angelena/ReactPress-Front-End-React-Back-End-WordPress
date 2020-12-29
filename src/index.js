import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Post from './pages/Post';
// import Archive from './pages/Archive';
import Notfound from './pages/Notfound';
import PostList from './pages/PostList';
import Gallery from './partials/Gallery';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import './styles/index.scss';
import App from './App';

// import PostItem from './pages/PostItem';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/posts/:slug/:id' component={PostDetails} />

			<Route exact path='/posts' component={PostList} />
			<Route exact path='/gallery'>
				<Gallery />
			</Route>
			<Route exact path='/newpost'>
				<CreatePost />
			</Route>
			<Route exact path='/'>
				<App />
			</Route>
			<Route path='*'>
				<Notfound />
			</Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
