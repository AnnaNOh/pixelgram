import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import LikeContainer from '../../likes/like_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CommentsFormContainer from '../../comments/comments_form_container';

class ProfileItem extends React.Component {
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

  followingButton(author){
    if (author.followed){
      return (
        <button
          className="already-following-button"
          onClick={ ()=>this.props.deleteFollow(author.id)}>
          Following
        </button>
      );
    }
    else {
      return (
        <button className="notyet-following-button" onClick={()=> this.props.addFollow(author.id)}>
          Follow
        </button>
      );
    }
  }

  render() {
    let photo = this.props.photo;
    return(
      <div className="profile-item-div">
        <li className= "profile-item">
          <div
            onClick={this.openModal}
            className="profile-hover">
            <h3 className="left-heart"><i className="fa fa-heart" aria-hidden="true"></i>  {photo.likes}</h3>
            <h3><i className="fa fa-comment" aria-hidden="true"></i>  {photo.comments_count}</h3>
          </div>

          <img
            className="profile-image"
            onClick={this.openModal}
            src={photo.img_url}
            alt={photo.body} />
        </li>

        <Modal
          className="photo-show-modal"
          isOpen={this.state.modalIsOpen}
          onClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          >

          <div className="photo-show-modal-div">
            <img
              className="photo-show-image"
              src={photo.img_url}
              alt={photo.body} />

            <div className="photo-show-comment">
              <div className="photo-show-comment-top">
                <img
                  className="modal-photo-author-img"
                  onClick={()=> this.props.history.push(`/user/${photo.author.username}`)}
                  src={photo.author.user_img_url}
                  alt={photo.author.username} />
                <Link to={`/user/${photo.author.username}`}>
                  <h3 className="modal-photo-author-name">{photo.author.username}</h3>
                </Link>
                {this.followingButton(photo.author)}
              </div>

              <div className="photo-show-comment-body">
                <div className="photo-show-body">
                  <h3>{photo.author.username}</h3>
                  <h4>{photo.body}</h4>
                </div>


                <div className="photo-comments">
                  <CommentsIndexContainer photo_id={photo.id} classtag="modal"/>

                <div className="photo-comments-bottom">
                  <div className="photo-bottom-icon-bar">
                    <LikeContainer
                      photo={photo}
                      photo_id={photo.id} />
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                  </div>
                  <h3>{photo.likes} likes</h3>
                  <h5>{photo.age}</h5>

                  <CommentsFormContainer photo_id={photo.id} classtag="modal"/>
                </div>
                </div>
              </div>
            </div>

            <button className="close-button" onClick={ this.closeModal }>
              <i className="fa fa-window-close" aria-hidden="true"></i>
            </button>
          </div>

        </Modal>


      </div>
    );
  }
}

export default ProfileItem;
