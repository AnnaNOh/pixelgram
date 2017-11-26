import React from 'react';

const PhotoItem = ({photo}) => {
  console.log(photo);
  return(
    <div>
      <li className= "photo-item">
        <div className="photo-top-container">
          <h3>{photo.author.user_img_url}</h3>
          <h3>{photo.author.username}</h3>
        </div>

        <img
          className="photo-item-image"
          src={photo.img_url}
          alt={photo.body}
          >
        </img>

        <div className="photo-bottom-container">
          <div className="photo-body">
            <h3>{photo.author.username}</h3>
            <h4>{photo.body}</h4>
          </div>
        </div>

      </li>
    </div>
  );
};

export default PhotoItem;
