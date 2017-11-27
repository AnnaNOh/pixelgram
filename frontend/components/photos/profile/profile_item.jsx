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
          <div className="photo-top-container">
            <Link to={`/user/${photo.author.username}`}>
              <h3>{photo.author.user_img_url}</h3>
            </Link>
            <h3>{photo.author.username}</h3>
          </div>

          <img
            className="photo-item-image"
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
              <div className="photo-body">
                <h3>{photo.author.username}</h3>
                <h4>{photo.body}</h4>
              </div>
              <h5>{photo.age}</h5>
            </div>
          </div>


        </li>
      </div>
    );
  }
}

export default ProfileItem;
