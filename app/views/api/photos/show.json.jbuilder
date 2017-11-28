
  json.extract! @photo, :id, :img_url, :body, :author_id
  json.author do
    json.username @photo.author.username
    json.user_img_url @photo.author.img_url
  end
  json.age time_ago_in_words(@photo.created_at)

  json.likes @photo.likes.count
  json.liked @photo.likes.any?{ |like| like.user_id == current_user.id }

  json.comments @photo.comments
