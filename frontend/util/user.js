export const getUser = username => {
  return $.ajax({
    method: "GET",
    url: `/users/${username}`,
    data: { username }
  });
};

export const addFollow = user_id => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { user_id }
  });
};

export const deleteFollow = user_id => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${user_id}`
  });
};
