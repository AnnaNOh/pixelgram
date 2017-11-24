import React from 'react';

const PhotoItem = ({photo}) => {

  return(
    <div>
      <li className= "photo-item">
        <h3>{photo.img_url}</h3>
        <h4>{photo.body}</h4>
      </li>
    </div>
  );
};

export default PhotoItem;
