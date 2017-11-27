
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_url, :body, :author_id
    json.author do
      json.username photo.author.username
      json.user_img_url photo.author.img_url
    end
    json.age time_ago_in_words(photo.created_at)
      .upcase
      .split(" ")
      .drop(1)
      .join(" ") + " AGO"
    json.likes photo.likes.count
    json.liked photo.likes.any?{ |like| like.user_id == current_user.id }
  end
end
