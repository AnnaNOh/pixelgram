import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LikeContainer from '../likes/like_container';
import merge from 'lodash/merge';

class PhotoItem extends React.Component {
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
  }

  render() {

    let photo = this.props.photo;

    return(
      <div>
        <li className= "photo-item">
          <div className="photo-top-container">
            <Link to={`/user/${photo.author.username}`}>
              <h3>{photo.author.user_img_url}</h3>
            </Link>
            <h3>{photo.author.username}</h3>
          </div>

          <img
            className="photo-item-image"
            onClick={this.openModal}
            src={photo.img_url}
            alt={photo.body} />

          <div className="photo-bottom-container">
            <div className="photo-bottom-icon-bar">
              <LikeContainer
                photo={photo}
                photo_id={photo.id} />
            </div>

            <div className="photo-bottom-items">
              <h3>{photo.likes} likes</h3>
              <div className="photo-bottom-comments-section">
                <div className="photo-author-body">
                  <h3>{photo.author.username}</h3>
                  <h4>{photo.body}</h4>
                </div>
                <div className="photo-comments">
                  {photo.comments.map(comment => (
                    <div
                      key={comment.id}
                      className="comment-item"
                      >

                      <h4>{comment.writer}</h4>
                      <h4>{comment.body}</h4>
                      <button onClick={()=> this.props.deleteComment(comment.id)}>
                        Delete
                      </button>
                    </div>
                  ))}
                  <form className="create-comment-form" onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      className="new-comment-body"
                      value={this.state.body}
                      placeholder="Add a comment"
                      onChange={this.update("body")}
                    />
                  </form>


                </div>
              </div>
              <h5>{photo.age}</h5>
            </div>
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
                  <h4>{photo.author.user_img_url}</h4>
                  <h3>{photo.author.username}</h3>
                </div>
                <div className="photo-show-comment-body">
                  <div className="photo-show-body">
                    <h4>{photo.author.username}</h4>
                    <h4>{photo.body}</h4>
                  </div>
                </div>
              </div>
              <button className="close-button"
                onClick={ this.closeModal }>×</button>
            </div>
          </Modal>

        </li>
      </div>
    );
  }
}

export default PhotoItem;
