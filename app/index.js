import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore();

const renderApp = () => {
	render((
		<Provider store={ store }>
			<div>Todo</div>
		</Provider>
	), document.getElementById('app'));
};

renderApp();
