import React, { useState, useEffect } from 'react';

import Head from './partials/layout/Head';
import Foot from './partials/layout/Foot';
import PostList from './pages/PostList';
import Intro from './partials/Intro';
import Layout from './partials/layout/Layout';

function App() {
	return (
		<>
			<Head />
			<Layout>
				<Intro />
				<PostList />
			</Layout>
			<Foot />
		</>
	);
}
export default App;
