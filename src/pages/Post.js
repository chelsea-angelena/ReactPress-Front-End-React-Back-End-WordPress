// import React from 'react';
// import { useRouteMatch } from 'react-router-dom';

// const useGetPost = (match) => {
// 	const [post, setPost] = useState(null);
// 	const [err, setError] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	console.log(match)
// 	let url = `/wp-json/wp/v2/posts/${match}`;

// const getPosts = async () => {
// 	try{
// 	let res = await axsio.get(url)
// 	console.log(res)
// }catch (e){
// 	console.error.(e)
// }finally {
// 	setLoading(false)
// }
// }

// 	useEffect(()=> {
// getPosts()
// }, [])

// return [post, error, loading]

// };

// export default function Post() {
// 	let match = useRouteMatch('/post/:slug');
// 	console.log(match)
// 	// let Post = useGetPost(match);
// 	return <div>Single Post</div>;
// }
