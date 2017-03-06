import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Blog from './Blog';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
			<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="blog" component={Blog}/>
			</Route>
		</Router>,
  document.getElementById('root')
);
