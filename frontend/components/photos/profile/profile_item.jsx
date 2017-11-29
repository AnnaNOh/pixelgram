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

          <img
            className="photo-item-image"
            src={photo.img_url}
            alt={photo.body} />

          <div className="photo-bottom-container">
            <div className="photo-bottom-items">
              <h3>{photo.likes} likes</h3>

            </div>
          </div>


        </li>
      </div>
    );
  }
}

export default ProfileItem;
