import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {composeWithDevTools} from "redux-devtools-extension";

import persistedReducer from './reducers/root/root';

import App from "./App";

const initialState = [];

const store = createStore(persistedReducer, initialState, composeWithDevTools());

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<App/>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);