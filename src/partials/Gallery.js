import React from 'react';
// import useCategories from '../hooks/useCategories';
import useMedia from '../hooks/useMedia';

export default function Gallery() {
	const [media] = useMedia();
	console.log(media);
	return (
		<>
			<div>Gallery</div>
			{media.map((item) => (
				<MediaItem media={item} />
			))}
		</>
	);
}

const MediaItem = ({ media }) => {
	const item = media.source_url;
	console.log(item);
	console.log(media);

	return (
		<>
			<div>
				<img src={item} alt='' width='200px' />
				<div dangerouslySetInnerHTML={{ __html: media.guid.rendered }}></div> 
			</div>
		</>
	);
};
