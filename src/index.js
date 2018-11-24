import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import Sidebar from './containers/sidebar/Sidebar';

import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
    	<Sidebar />
	</BrowserRouter>,
app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//<ChatsList className={this.props.active ? 'active' : 'non-active'} />