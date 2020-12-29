import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Notfound() {
	const location = useLocation();
	console.log(location, 'location');
	return <div>No Page found for {location.pathname}</div>;
}
