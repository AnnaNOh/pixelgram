
import React from 'react';
import merge from 'lodash/merge';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      body: "",
      author_id: currentUser.id
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
       console.log(results[0]);
       this.state.img_url = results[0].url;
       console.log(this.state);
     }
    }.bind(this));

    this.forceUpdate();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPhoto = merge({}, this.state);
    this.props.uploadPhoto(newPhoto);
  }

  render() {
    return (
      <div className="photo-ul">

        <form className='photo-form' onSubmit={this.handleSubmit}>
          <label htmlFor="upload">
            <div className='upload-symbol'>&#8682;</div>
            <input
              type="file"
              className="choose-photo"
              onChange={ this.uploadPhoto } />
          </label>

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
