import React, { Component } from 'react';
import store from '../store';
import AddPage from '../components/AddPage';
import {submitNewWiki} from '../action-creators/wikiPages'

export default class AddPageContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      content: '',
      status: 'open',
      tags: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.titleChange = this.titleChange.bind(this)
    this.contentChange = this.contentChange.bind(this)
    this.statusChange = this.statusChange.bind(this)
    this.tagsChange = this.tagsChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store.dispatch(submitNewWiki(this.state))
  }

  nameChange(evt) {
    const name = evt.target.value;
    this.setState({
      name: name
    });
  }

  emailChange(evt) {
    const email = evt.target.value;
    this.setState({
      email: email
    });
  }

  titleChange(evt) {
    const title = evt.target.value;
    this.setState({
      title: title
    });
  }

  contentChange(evt) {
    const content = evt.target.value;
    this.setState({
      content: content
    });
  }

  statusChange(evt) {
    const status = evt.target.value;
    this.setState({
      status: status
    });
  }

  tagsChange(evt) {
    const tags = evt.target.value;
    this.setState({
      tags: tags
    });
  }

  render () {
    // console.log(this.state)

    return (
      <div>
        <AddPage
          handleSubmit={this.handleSubmit}
          nameChange={this.nameChange}
          emailChange={this.emailChange}
          titleChange={this.titleChange}
          contentChange={this.contentChange}
          statusChange={this.statusChange}
          tagsChange={this.tagsChange}
          state={this.state}
        />
      </div>
    );
  }
}
