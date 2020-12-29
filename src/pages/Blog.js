import React from 'react';
import usePosts from '../hooks/usePosts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import useGetPost from '../hooks/useGetPost';
import axios from 'axios';
import PostDetails from './PostDetails';
import PostList from './PostList';

export default function Blog() {
	let { path, url } = useRouteMatch();

	return (
		<div>
			<Link to={`${url}/posts`}>Posts</Link>

			<Switch>
				<Route exact path={path}>
					<PostList />
				</Route>
			</Switch>
		</div>
	);
}
