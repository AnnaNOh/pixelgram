
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_url, :body, :author_id, :updated_at
    json.author do
      json.id photo.author.id
      json.username photo.author.username
      json.user_img_url photo.author.img_url
      json.followed photo.author.followers.any?{ |follower| follower.id == current_user.id }
    end
    json.age time_ago_in_words(photo.created_at).upcase + " AGO"
    json.likes photo.likes.count
    json.liked photo.likes.any?{ |like| like.user_id == current_user.id }

    json.comments photo.comments.each do |comment|
      json.id comment.id
      json.body comment.body
      json.writer comment.writer.username
    end
    json.comments_count photo.comments.count
  end
end
