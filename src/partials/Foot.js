import React from 'react';
import { Heart } from 'react-bootstrap-icons';

export default function Foot() {
	return (
		<div className='footer'>
			<p className='footer__text'>
				<Heart />
				<span className='footer__text--span'>Made by Chelsea</span>©2020
			</p>
		</div>
	);
}
