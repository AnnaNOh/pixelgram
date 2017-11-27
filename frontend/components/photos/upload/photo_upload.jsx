
import React from 'react';
import merge from 'lodash/merge';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      body: "",
      author_id: this.props.currentUser.id
    };
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
       this.state.img_url = results[0].url;
       this.forceUpdate(); // needed to show preview image
     }
    }.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPhoto = merge({}, this.state);
    this.props.uploadPhoto(newPhoto);

    this.state = {
      img_url: "",
      body: "",
      author_id: this.props.currentUser.id
    };
  }

  render() {
    return (
      <div className="photo-ul">

        <form className='photo-form' onSubmit={this.handleSubmit}>
          <input
            type="file"
            onClick={ this.uploadPhoto } />

          <input
            type="text"
            className="photo-body"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Add a caption" />

          <button className="upload-button">
            Submit
          </button>
        </form>

        <img
          className="photo-preview"
          src={ this.state.img_url } />

      </div>
    );
  }
}

export default PhotoUpload;
