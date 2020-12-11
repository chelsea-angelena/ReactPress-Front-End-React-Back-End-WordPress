import React from 'react';
import Head from '../partials/Head.js';
import Foot from '../partials/Foot.js';
import TheLoop from '../partials/TheLoop';
import styled from 'styled-components';

export default function Archive() {
	return (
		<View>
			<Head title='Home Page' />
			<TheLoop />
			<Foot />
		</View>
	);
}

const View = styled.div`
	width: 100%;
	height: 100%;
	background-color: papaya-whip;
`;
