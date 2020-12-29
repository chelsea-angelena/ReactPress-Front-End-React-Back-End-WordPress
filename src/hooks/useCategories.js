import React, { useState, useEffect } from 'react';
import axios from 'axios';
let url = '/wp-json/wp/v2/categories';

export default function useCategories() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const getPosts = async () => {
		try {
			let res = await axios.get(url);
			console.log(res.data);
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
