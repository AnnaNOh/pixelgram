import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
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


  render() {
    console.log(photo);
    let photo = this.props.photo;
    return(
      <div>
        <li className= "photo-item">
          <div className="photo-top-container">
            <h3>{photo.author.user_img_url}</h3>
            <h3>{photo.author.username}</h3>
          </div>

          <img
            className="photo-item-image"
            onClick={this.openModal}
            src={photo.img_url}
            alt={photo.body} />

          <div className="photo-bottom-container">
            <div className="photo-body">
              <h3>{photo.author.username}</h3>
              <h4>{photo.body}</h4>
            </div>
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onClose={this.closeModal}>
            <div className="photo-show-modal">
              <button className="close-button"
                onClick={ this.closeModal }>×</button>
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
                  <h4>{photo.author.username}</h4>
                  <h4>{photo.body}</h4>
                </div>
              </div>
            </div>
          </Modal>

        </li>
      </div>
    );
  }
}

export default PhotoItem;
