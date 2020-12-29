import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useMedia() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const getPosts = async () => {
		let url = '/wp-json/wp/v2/media';
		try {
			let res = await axios.get(url);
			setData(res.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getPosts();
	}, []);
	return [data, error, loading];
}
