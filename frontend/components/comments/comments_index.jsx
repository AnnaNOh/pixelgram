import React from 'react';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount(){
    this.props.getComments(this.props.photo_id);
  }

  deleteButton(comment){
    if (comment.writer === this.props.currentUser.username){
      return (
        <button className="comment-delete-button" onClick={()=> this.props.deleteComment(comment.id)}>
          ×
        </button>
      );
    }
  }

  render(){
    let currentUser = this.props.currentUser;
    let classtag = this.props.classtag;
    return(
      <div className={classtag}>
        <ul className= {classtag + "comments-list"}>
          {this.props.comments.map(comment => (
            <li key={comment.id} className={classtag+"comments-item"}>

              <div className={classtag+"comments-author-body"}>
                <h3>{comment.writer}</h3>
                <h4>{comment.body}</h4>
              </div>

              <div className={classtag+"photo-comments-right"}>
                {this.deleteButton(comment)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentsIndex;
