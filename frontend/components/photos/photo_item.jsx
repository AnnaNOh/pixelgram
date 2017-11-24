import React from 'react';

const PhotoItem = ({photo}) => {
  console.log(photo);
  return(
    <div>
      <li className= "photo-item">
        <h3>{photo.author.username}</h3>
        <h3>{photo.img_url}</h3>
        <h4>{photo.body}</h4>
      </li>
    </div>
  );
};

export default PhotoItem;
