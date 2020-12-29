import React from 'react';
import useCategories from '../hooks/useCategories';
import usePosts from '../hooks/usePosts';
import { Link } from 'react-router-dom';

export default function Categories() {
	const [data] = useCategories();
	return (
		<>
			<div>Categories</div>
			{data.map((item) => (
				<CategoryItem category={item} />
			))}
		</>
	);
}
const CategoryItem = ({ category }) => {
	console.log(category);
	// const { name, link } = category;
	return (
		<>
			<Link
				to={{
					pathname: `/categories/${category.slug}/${category.id}`,
					myCustomProps: category,
				}}
			>
				{category.name}
			</Link>
			{/* <Link
				to={{
					pathname: `/categories/${category.slug}/${category.id}`,
					state: { category },
				}}
			>
				{name}
			</Link> */}
		</>
	);
};
// const MediaItem = ({ media }) => {
// 	console.log(media, 'media');

// 	return <div>Media Item</div>;
// };
