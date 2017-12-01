import React from 'react';
import merge from 'lodash/merge';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      error: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newComments = merge({}, this.state);
    this.props.createComment(this.props.photo_id, this.state.body);
    this.setState({
      modalIsOpen: false,
      body: "",
      error: ""
    });
  }

  render() {
    let classtag = this.props.classtag;
    return(
      <div>
        <form className={classtag+"create-comment-form"} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={classtag+"new-comment-body"}
            value={this.state.body}
            placeholder="Add a comment..."
            onChange={this.update("body")}
          />
        <button
          className="post-comment-button"
          onClick={this.handleSubmit}>
          Post
        </button>

        </form>
      </div>
    );
  }
}

export default CommentsForm;
