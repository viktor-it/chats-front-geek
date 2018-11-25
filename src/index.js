import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';

import store from './store/store';

import Sidebar from './layouts/Sidebar';

import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
  			<Sidebar />
		</BrowserRouter>
	</Provider>,

app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

