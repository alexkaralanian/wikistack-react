import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AddPage from './AddPage';

import WikiPagesContainer from './containers/WikiPagesContainer'
import { loadAllWikis } from './action-creators/wikiPages';
import Layout from './Layout';
import store from './store';
import { Provider } from 'react-redux';

const onWikiEnter = () => {
		store.dispatch(loadAllWikis())
};


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/wiki" component={WikiPagesContainer} onEnter={onWikiEnter} />
      <Route path="/wiki/add" component={AddPage} />
      <IndexRedirect to="/wiki" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
