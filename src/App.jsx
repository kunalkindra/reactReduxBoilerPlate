import React from 'react';
import {Router} from 'react-router-dom';
import './assets/style/index.css';

import history from './utils/history';

import Routes from "./routes/Routes";
import Header from "./components/header/Header";

export default function App() {
	return (
		<div className='app container'>
			<Header/>
			<Router history={history}>
				<Routes/>
			</Router>
		</div>
	);
}