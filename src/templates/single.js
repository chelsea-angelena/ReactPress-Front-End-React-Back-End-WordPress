import React from 'react';
import Head from '../partials/Head.js';
import Foot from '../partials/Foot.js';
import TheLoop from '../partials/TheLoop.js';
import { Provider } from '../context/Context.js';
import styled from 'styled-components';

export default function Single(props) {
	return (
		<Provider router={props}>
			<View>
				<div className='Post'>
					<Head title={props.match.params.slug} />
					<h1>this is the slug: {props.match.params.slug}</h1>
					<TheLoop />
					<Foot />
				</div>
			</View>
		</Provider>
	);
}
const View = styled.div`
	width: 100%;
	height: 100%;
	background-color: papaya-whip;
`;
