import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LikeContainer from '../../likes/like_container';
import merge from 'lodash/merge';



class ExploreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,

      body: "",
      error: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);


    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }


  openModal(){
    this.setState({modalIsOpen: true});
  }
  closeModal(){
    this.setState({modalIsOpen: false});
  }


  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newComments = merge({}, this.state);
    this.props.createComment(this.props.photo.id, this.state.body);
    this.setState({
      modalIsOpen: false,
      body: "",
      error: ""
    });
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

  render() {
    let photo = this.props.photo;

    return(
      <div>
        <li className= "photo-item">


          <div className= "photo-item-each">
            <div className="photo-hover-container">
              <h3>{photo.likes} likes</h3>
              <h3>{photo.comments_count} comments</h3>
            </div>

            <img
              className="photo-item-image"
              src={photo.img_url}
              alt={photo.body}
              onClick={this.openModal} />
          </div>


          <Modal
            className="photo-show-modal"
            isOpen={this.state.modalIsOpen}
            onClose={this.closeModal}>

            <div className="photo-show-modal-div">
              <img
                className="photo-show-image"
                src={photo.img_url}
                alt={photo.body} />

              <div className="photo-show-comment">
                <div className="photo-show-comment-top">
                  <img
                    className="photo-author-img"
                    onClick={()=> this.props.history.push(`/user/${photo.author.username}`)}
                    src={photo.author.user_img_url}
                    alt={photo.author.username} />
                  <Link to={`/user/${photo.author.username}`}>
                    <h3>{photo.author.username}</h3>
                  </Link>
                </div>


                <div className="photo-show-comment-body">
                  <div className="photo-show-body">
                    <h3>{photo.author.username}</h3>
                    <h4>{photo.body}</h4>
                  </div>

                  <div className="photo-comments">
                    {photo.comments.map(comment => (
                      <div className="comment-item" key={comment.id}>
                        <div className="photo-comments-left">
                          <h3>{comment.writer}</h3>
                          <h4>{comment.body}</h4>
                        </div>
                        <div className="photo-comments-right">
                          {this.deleteButton(comment)}
                        </div>
                      </div>
                    ))}

                    <div className="photo-bottom-icon-bar">
                      <LikeContainer
                        photo={photo}
                        photo_id={photo.id} />
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </div>
                    <h3>{photo.likes} likes</h3>
                    <h5>{photo.age}</h5>

                    <form className="create-comment-form" onSubmit={this.handleSubmit}>
                      <input
                        type="text"
                        className="new-comment-body"
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
                </div>
              </div>

              <button className="close-button" onClick={ this.closeModal }>
                ×
              </button>
            </div>

          </Modal>
        </li>
      </div>
    );
  }
}

export default ExploreItem;
