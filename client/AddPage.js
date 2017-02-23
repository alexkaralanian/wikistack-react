import React, { Component } from 'react';
import store from './store';
import {addNewWiki} from './action-creators/wikiPages'

export default class AddPage extends Component {

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
    store.dispatch(addNewWiki(this.state))

  }

  nameChange(evt) {
    const name = evt.target.value;
    // console.log(this.state.name)
    this.setState({
      name: name
    });
  }

  emailChange(evt) {
    const email = evt.target.value;
    // console.log(this.state.email)
    this.setState({
      email: email
    });
  }

  titleChange(evt) {
    const title = evt.target.value;
    // console.log(this.state.title)
    this.setState({
      title: title
    });
  }

  contentChange(evt) {
    const content = evt.target.value;
    // console.log(this.state.content)
    this.setState({
      content: content
    });
  }

  statusChange(evt) {
    const status = evt.target.value;
    // console.log(this.state.status)
    this.setState({
      status: status
    });
  }

  tagsChange(evt) {
    const tags = evt.target.value;
    // console.log(this.state.tags)
    this.setState({
      tags: tags
    });
  }

  render () {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Page</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
            <div className="col-sm-10">
              <input 
              name="name" type="text" className="form-control"
              onChange={this.nameChange}
              value={this.state.name}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
            <div className="col-sm-10">
              <input name="email" type="text" className="form-control"
              onChange={this.emailChange}
              value={this.state.email}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
            <div className="col-sm-10">
              <input name="title" type="text" className="form-control"
              onChange={this.titleChange}
              value={this.state.title}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-10">
              <textarea name="content"
              onChange={this.contentChange}
              value={this.state.contentChange}
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="status" className="col-sm-2 control-label">Status</label>
            <div className="col-sm-10">
              <select name="status"
                onChange={this.statusChange}
                value={this.state.status}
              >
                <option>open</option>
                <option>closed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
            <div className="col-sm-10">
              <input name="tags" type="text" className="form-control" 
                onChange={this.tagsChange}
                value={this.state.tags}
              />
            </div>
          </div>

          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>

        </form>
      </div>
    );
  }
}
