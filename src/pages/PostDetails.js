import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useGetPost from '../hooks/useGetPost';
import axios from 'axios';
import Head from '../partials/layout/Head';
import Foot from '../partials/layout/Foot';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

const PostDetails = (props) => {
	let match = useRouteMatch();
	console.log(match.params.id);

	let id = match.params.id;
	let url = `/wp-json/wp/v2/posts/${id}`;

	const [post, setPost] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log(url);

	useEffect(() => {
		const getPost = async () => {
			try {
				let res = await axios.get(`
        ${url}`);
				setPost(res.data);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		getPost();
	}, [url]);
	const createMarkup = (html) => {
		return { __html: html };
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p> error....</p>;
	}
	console.log(post);
	return (
		<>
			<Head />
			<Card>
				{/* <Typography
				color='textSecondary'
				gutterBottom
				dangerouslySetInnerHTML={{ __html: post.title.rendered }}
			/>
			<Typography
				variant='body2'
				component='p'
				dangerouslySetInnerHTML={{ __html: post.content.rendered }}
			/> */}
				{/* <div dangerouslySetInnerHTML={createMarkup(post.title.rendered)}></div>
			<div dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)} />
			<div dangerouslySetInnerHTML={createMarkup(post.content.rendered)}></div> */}
				<div>
					<h1>{post.title.rendered}</h1>
					<div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
				</div>
			</Card>
			<Foot />
		</>
	);
};
export default PostDetails;
