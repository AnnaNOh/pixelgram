import * as APIUtil from '../util/photos';


export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO";
export const CURRENTLY_LOADING = "CURRENTLY_LOADING";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receiveSinglePhoto = photo => ({
  type: RECEIVE_SINGLE_PHOTO,
  photo
});

export const currentlyLoading = () => ({
  type: CURRENTLY_LOADING
});

export const fetchPhotos = () => dispatch => {
  dispatch(currentlyLoading());
  return APIUtil.getPhotos().then(photos => dispatch(receivePhotos(photos)));
};

export const fetchPhoto = id => dispatch => {
  dispatch(currentlyLoading());
  return APIUtil.getPhoto(id).then(photo => dispatch(receiveSinglePhoto(photo)));
};

export const uploadPhoto = (photo) => dispatch => {
  dispatch(currentlyLoading());
  return APIUtil.createPhoto(photo).then(photo => dispatch(receiveSinglePhoto(photo)));
};

export const addLike = photo_id => dispatch => {
  return APIUtil.addLike(photo_id).then(photo => dispatch(receiveSinglePhoto(photo)));
};

export const deleteLike = photo_id => dispatch => {
  return APIUtil.deleteLike(photo_id).then(photo => dispatch(receiveSinglePhoto(photo)));
};

export const getProfilePhotos = username => dispatch => {
  dispatch(currentlyLoading());
  return APIUtil.getProfilePhotos(username).then(photos => dispatch(receivePhotos(photos)));
};

export const getAllPhotos = () => dispatch => {
  dispatch(currentlyLoading());
  return APIUtil.getAllPhotos().then(photos => dispatch(receivePhotos(photos)));
};
