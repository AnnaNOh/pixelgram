import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import merge from 'lodash/merge';

import LikeContainer from '../likes/like_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comments_form_container';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      error: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }


  followingButton(user){
    if (user.followed){
      return (
        <button className="already-following-button" onClick={()=> this.props.deleteFollow(user.id)}>
          Following
        </button>
      );
    }
    else {
      return (
        <button className="notyet-following-button" onClick={()=> this.props.addFollow(user.id)}>
          Follow
        </button>
      );
    }
  }

  render() {
    let photo = this.props.photo;

    return(
      <div>
        <li className= "photo-item">
          <div className="photo-top-container">
              <img
                className="photo-author-img"
                onClick={()=> this.props.history.push(`/user/${photo.author.username}`)}
                src={photo.author.user_img_url}
                alt={photo.author.username} />
            <Link to={`/user/${photo.author.username}`}>
              <h3>{photo.author.username}</h3>
            </Link>
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
                  <CommentsIndexContainer
                    photo_id={photo.id}
                  />

                  <h5>{photo.age}</h5>

                  <CommentsFormContainer
                    photo_id={photo.id}
                  />
                </div>


              </div>
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
                  <img
                    className="photo-author-img"
                    onClick={()=> this.props.history.push(`/user/${photo.author.username}`)}
                    src={photo.author.user_img_url}
                    alt={photo.author.username} />
                  <Link to={`/user/${photo.author.username}`}>
                    <h3>{photo.author.username}</h3>
                  </Link>
                  {this.followingButton(photo.author)}
                </div>

                <div className="photo-show-comment-body">
                  <div className="photo-show-body">
                    <h3>{photo.author.username}</h3>
                    <h4>{photo.body}</h4>
                  </div>


                  <div className="photo-comments">
                    <CommentsIndexContainer photo_id={photo.id} />

                    <div className="photo-bottom-icon-bar">
                      <LikeContainer
                        photo={photo}
                        photo_id={photo.id} />
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </div>
                    <h3>{photo.likes} likes</h3>
                    <h5>{photo.age}</h5>

                    <CommentsFormContainer photo_id={photo.id} />

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

export default PhotoItem;
