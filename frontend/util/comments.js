export const getComments = photo_id => {
  return $.ajax({
    method: "GET",
    url: '/api/comments',
    data: {photo_id}
  });
};

export const createComment = (photo_id, body) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: {photo_id, body}
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  });
};
