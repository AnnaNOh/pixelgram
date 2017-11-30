
import React from 'react';
import merge from 'lodash/merge';
import Modal from 'react-modal';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      img_url: "",
      body: "",
      author_id: this.props.currentUser.id,
      likes: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // How do you clear the upload area after a submit?

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  uploadPhoto(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
     if(!error){
       let newState = Object.assign({}, this.state, {img_url: results[0].url});
       this.setState(newState);
     }
    }.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPhoto = merge({}, this.state);
    this.props.uploadPhoto(newPhoto);
    this.closeModal();
  }

  render() {
    return (
      <div className="photo-upload-form-modal">
        <button onClick={this.openModal}>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          Upload a photo
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          >
          <div className="photo-upload">

            <form className='photo-upload-form' onSubmit={this.handleSubmit}>
              <input
                type="file"
                onClick={ this.uploadPhoto } />

              <input
                type="text"
                className="photo-body"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="Add a caption" />

              <button
                className="upload-button"
                onClick={this.handleSubmit}>
                Submit
              </button>

              <button
                className="close-button"
                onClick={ this.closeModal }>
                Cancel
              </button>

            </form>

            <img
              className="photo-preview"
              src={ this.state.img_url } />

          </div>
        </Modal>
      </div>
    );
  }
}

export default PhotoUpload;
