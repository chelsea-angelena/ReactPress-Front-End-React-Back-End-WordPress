import React from 'react';

import NavBarReact from './NavBarResponsive';

export default function Head({ title }) {
	return (
		<>
			<NavBarReact />
			<div className='header'>
				<div fluid className='title__div'>
					<p className='title'>ReactPress</p>
					<p className='subtitle'>Blog Theme</p>
				</div>
			</div>
		</>
	);
}

// const Navbar = styled.div`P
// 	background-color: green.dark;
// 	width: 100%;
// 	height: 42px;
// `;
