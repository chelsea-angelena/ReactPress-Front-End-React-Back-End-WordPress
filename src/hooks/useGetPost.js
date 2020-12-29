import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGetPost() {
	const [post, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(url, 'url');
	const getPost = async (url) => {
		try {
			let res = await axios.get(`http://localhost:8888/${url}`);
			console.log(res.data, 'res.data');
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPost();
	}, []);
	return [post, error, loading, getPost];
}
export default useGetPost;
