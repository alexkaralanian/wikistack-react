import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AddPage from './AddPage';
import WikiPages from './WikiPages';
import {loadAllWikis} from './action-creators/wikiPages';
import Layout from './Layout';
import store from './store';

const onWikiEnter = () => {
		store.dispatch(loadAllWikis())
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
