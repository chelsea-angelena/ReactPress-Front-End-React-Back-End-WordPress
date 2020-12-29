// import React from 'react';
// import Axios from 'axios';
// const storeContext = React.createContext();
// export const Consumer = storeContext.Consumer;

// let url = `/wp-json/wp/v2/pages/${slug}` || `/wp-json/wp/v2/posts/${slug}`;

// function useRoute(props) {
// 	const [slug, setSlug] = useState(
// 		props.router.match.params.slug ? props.router.match.params.slug : ''
// 	);
// 	const [route, setRoute] = useState(props.router.match.path);
// 	const [posts, setPosts] = useState([]);

// 	const getPosts = async (url) => {
// 		try {
// 			let res = await axios.get(url);
// 			setPosts(res);
// 		} catch (e) {
// 			console.log(error);
// 		}
// 	};
// 	useEffect(() => {
// 		getPosts('/wp-json/wp/v2/');
// 	}, []);

// 	return;
// 	[slug, route, posts];
// }

