import React, { Component } from 'react';
import store from '../store';
import WikiPages from '../components/WikiPages';

export default class WikiPagesContainer extends Component {

  constructor() {
    super();
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {

    return (
      <WikiPages allPages={this.state.allPages} />
    );
  }
}
