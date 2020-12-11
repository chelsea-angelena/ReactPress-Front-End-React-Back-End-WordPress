import React, { useState, useEffect } from 'react';
import axios from 'axios';
let url = '/wp-json/wp/v2/posts';

function usePosts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const getPosts = async () => {
		try {
			let res = await axios.get(url);
			setPosts(res.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getPosts();
	}, []);
	return [posts, error, loading];
}
export default usePosts;
