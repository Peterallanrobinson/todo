import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = () => {};
const store = createStore(reducer);

const renderApp = () => {
	render((
		<Provider store={ store }>
			<div>Todo</div>
		</Provider>
	), document.getElementById('app'));
};

renderApp();
