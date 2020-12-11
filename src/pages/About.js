import React, { useState, useRef } from 'react';
import axios from 'axios';

const baseUrl = '/wp-json/wp/v2/posts';

export default function About({ user }) {
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);
	const imageInputRef = useRef();

	const handleAddPost = async (post) => {
		try {
			await axios.post(baseUrl, {
				method: 'POST',
				data: { post },
			});
		} catch (e) {
			console.error(e);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const post = { content, image, id: Date.now() };
		handleAddPost(post);
		setContent('');
		imageInputRef.current.value = '';
	};

	return (
		<>
			<div>
				<h1>Create New Post</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={content}
						placeholder='Add Post Content'
						onChange={(event) => setContent(event.target.value)}
					/>
					<input
						ref={imageInputRef}
						type='file'
						onChange={(event) => setImage(event.target.files[0])}
					/>
					<button type='submit'>Submit Post</button>
				</form>
			</div>
			<div>
				{image && (
					<img
						style={{ height: 100, width: 200, objectFit: 'cover' }}
						src={URL.createObjectURL(image)}
						alt='Post cover'
					/>
				)}
			</div>
		</>
	);
}
