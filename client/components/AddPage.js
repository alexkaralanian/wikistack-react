import React from 'react';

const AddPage = (props) => {

  return (
    <div>
      <h3>Add a Page</h3>
      <hr />
      <form onSubmit={props.handleSubmit}>

        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
          <div className="col-sm-10">
            <input 
            name="name" type="text" className="form-control"
            onChange={props.nameChange}
            value={props.state.name}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
          <div className="col-sm-10">
            <input name="email" type="text" className="form-control"
            onChange={props.emailChange}
            value={props.state.email}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
          <div className="col-sm-10">
            <input name="title" type="text" className="form-control"
            onChange={props.titleChange}
            value={props.state.title}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="col-sm-2 control-label">Content</label>
          <div className="col-sm-10">
            <textarea name="content"
            onChange={props.contentChange}
            value={props.state.contentChange}
            ></textarea>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status" className="col-sm-2 control-label">Status</label>
          <div className="col-sm-10">
            <select name="status"
              onChange={props.statusChange}
              value={props.state.status}
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
              onChange={props.tagsChange}
              value={props.state.tags}
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

export default AddPage;

