import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LikeContainer from '../../likes/like_container';

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photo = this.props.photo;
    console.log(photo);
    return(
      <div>
        <li className= "photo-item">
          <div className="photo-hover-container">
            <h3>{photo.likes} likes</h3>
            <h3>{photo.comments_count} comments</h3>
          </div>

          <img
            className="photo-item-image"
            src={photo.img_url}
            alt={photo.body} />
        </li>
      </div>
    );
  }
}

export default ProfileItem;
