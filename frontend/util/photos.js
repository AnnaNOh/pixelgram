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
