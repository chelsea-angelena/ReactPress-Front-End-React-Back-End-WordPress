import React from 'react';
import Axios from 'axios';
const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
	constructor(props) {
		super(props);

		// let restType = this.getRestType(props.router.match.path);
		let route = props.router.match.path;
		let slug = props.router.match.params.slug
			? props.router.match.params.slug
			: '';

		this.state = {
			slug: slug,
			// restType: restType,
			route: route,
			posts: [],
		};
	}
	componentDidMount() {
		this.getPosts(this.buildUrl());
	}
	buildUrl() {
		let url = '/wp-json/wp/v2/';
		switch (this.state.restType) {
			case 'page':
				url += 'pages/:slug=' + this.state.slug;
				break;
			case 'post':
			default:
				url += 'posts/:slug=' + this.state.slug;
				break;
		}

		return url;
	}

	getPosts(url) {
		let self = this;
		Axios.get(url).then((response) =>
			self
				.setState({
					posts: response.data,
				})
				.catch(function (error) {
					console.log(error);
					self.appError = 'An unexpected error occurred';
				})
		);
	}

	render() {
		return (
			<storeContext.Provider value={this.state}>
				{this.props.children}
			</storeContext.Provider>
		);
	}
}
