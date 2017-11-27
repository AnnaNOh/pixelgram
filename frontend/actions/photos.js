import * as APIUtil from '../util/photos';


export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO";


const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receiveSinglePhoto = photo => ({
  type: RECEIVE_SINGLE_PHOTO,
  photo
});

export const fetchPhotos = () => dispatch => {
  return APIUtil.getPhotos().then(photos => dispatch(receivePhotos(photos)));
};

export const fetchPhoto = id => dispatch => {
  return APIUtil.getPhoto(id).then(photo => dispatch(receiveSinglePhoto(photo)));
};

export const uploadPhoto = (photo) => dispatch => {
  return APIUtil.createPhoto(photo).then(photo => dispatch(receiveSinglePhoto(photo)));
};
