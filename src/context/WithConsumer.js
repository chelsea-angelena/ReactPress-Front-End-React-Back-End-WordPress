import React from 'react';
import { Consumer } from './Context';

export default function WithConsumer(WrappedComponent) {
	return function (props) {
		return (
			<Consumer>
				{(ctx) => <WrappedComponent {...props} context={ctx} />}
			</Consumer>
		);
	};
}
