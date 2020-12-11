import React from 'react';
import usePosts from '../hooks/usePosts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
export default function PostList() {
	const [posts, error, loading] = usePosts();

	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		return <div>error</div>;
	}
	return (
		<div className='postlist'>
			<Grid container spacing={2}>
				{posts.map((post, index) => (
					<Grid item xs={4} key={index}>
						<PostItem key={post.id} post={post} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

const PostItem = ({ post }) => {
	console.log(post);
	// const {
	// 	author,
	// 	content,
	// 	categories,
	// 	slug,
	// 	links,
	// 	title,
	// 	meta,
	// 	date,
	// 	content,
	// 	featured_media,
	// 	tags,
	// } = post;

	return (
		<Card>
			<CardContent>
				<Typography
					color='textSecondary'
					gutterBottom
					dangerouslySetInnerHTML={{ __html: post.title.rendered }}
				/>
				<Typography
					variant='body2'
					component='p'
					dangerouslySetInnerHTML={{ __html: post.content.rendered }}
				/>
			</CardContent>
		</Card>
	);
};
