import React, { Component } from 'react';
import store from './store';

export default class WikiPages extends Component {

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
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />
        <ul className="list-unstyled">
          <ul>
            { this.state.allPages && this.state.allPages.map(page =>
                (<li key={page.id}>{page.title}</li>)
              )
            }
          </ul>
        </ul>
      </div>
    );
  }
}
