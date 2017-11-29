export const getUser = username => {
  return $.ajax({
    method: "GET",
    url: `/users/${username}`,
    data: { username }
  });
};

export const addFollow = id => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { id }
  });
};

export const deleteFollow = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`,
    data: { id }
  });
};
