import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AddPage from './AddPage';
import WikiPages from './WikiPages';
import {getWikiPages} from './action-creators/wikiPages';
import Layout from './Layout';
import store from './store';
import axios from 'axios';

const onWikiEnter = () => {

  return axios.get('/api/wiki')
    .then(res => {
		store.dispatch(getWikiPages(res.data))
    })
    .catch(console.error)
};


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/wiki" component={WikiPages} onEnter={onWikiEnter} />
      <Route path="/wiki/add" component={AddPage} />
      <IndexRedirect to="/wiki" />
    </Route>
  </Router>,
  document.getElementById('app')
);
