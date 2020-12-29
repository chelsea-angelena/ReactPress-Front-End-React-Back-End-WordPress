import React from 'react';
import Head from '../partials/layout/Head.js';
import Foot from '../partials/layout/Foot.js';
// import TheLoop from '../partials/TheLoop';
import styled from 'styled-components';

export default function Archive() {
	return (
		<View>
			<Head title='Search Posts' />
			SearchPosts
			<Foot />
		</View>
	);
}

const View = styled.div`
	width: 100%;
	height: 100%;
	background-color: papaya-whip;
`;
