import React from 'react';
import usePosts from '../hooks/usePosts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
	useParams,
	Route,
	Link,
	useRouteMatch,
	Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Head from '../partials/layout/Head';
import Foot from '../partials/layout/Foot';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function PostList() {
	const [posts, error, loading] = usePosts();
	console.log(posts);
	const classes = useStyles();
	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		return <div>error</div>;
	}
	return (
		<>
			<div className='postlist'>
				<Grid container spacing={2} className={classes.root}>
					{posts.map((post) => (
						<Grid item xs={3} className={classes.paper}>
							<PostItem post={post} key={post.id} />
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
}

export const PostItem = ({ post }) => {
	console.log(post);
	// const createMarkup = (html) => {
	// 	return { __html: html };
	// };
	return (
		<div>
			<Card>
				<CardContent>
					<Link
						to={{
							key: `${post.id}`,
							pathname: `/posts/${post.slug}/${post.id}`,
							props: { id: `${post.id}`, post: post },
						}}
					>
						<Typography
							color='textSecondary'
							gutterBottom
							dangerouslySetInnerHTML={{ __html: post.title.rendered }}
						/>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
};
