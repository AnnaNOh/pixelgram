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
