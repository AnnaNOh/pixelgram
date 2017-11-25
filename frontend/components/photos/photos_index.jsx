import React from 'react';
import PhotoItem from './photo_item';


class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    console.log(this.props);
    return(
      <div>

        <ul className="photos-index-container">
          {this.props.photos.map(photo => (
            <PhotoItem
              key={photo.id}
              photo={photo}
            />
          ))}
        </ul>
        
      </div>
    );
  }
}

export default PhotoIndex;
