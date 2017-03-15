import React, { Component, PropTypes } from 'react';
import { Control, Form, actions, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(form) {
    actions.submit('form', createPost(form), validate);
  }

  render() {
    const required = (val) => val && val.length;

    return(
      <Form model="form" onSubmit={(form) => this.onSubmit(form)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Control.text model="form.title" className="form-control" validators={{ required }}/>
          <Errors
            model="form.title"
            messages={{required: 'Enter a title'}}
            show="touched"
            className="has-danger text-help"
          />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Control.text model="form.categories" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <Control.textarea model="form.content" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </Form>
    );
  }
}


export default connect(null, { createPost })(PostsNew);
