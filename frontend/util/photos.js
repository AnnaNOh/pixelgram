export const getPhotos = () => {
  return $.ajax({
    method: "GET",
    url: '/api/photos'
  });
};

export const getPhoto = id => {
  return $.ajax({
    method: "GET",
    url: `/api/photos/${id}`
  });
};

export const createPhoto = photo => {
  return $.ajax({
    method: "POST",
    url: '/api/photos',
    data: {photo}
  });
};

export const addLike = photo_id => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: { photo_id }
  });
};

export const deleteLike = photo_id => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${photo_id}`
  });
};
