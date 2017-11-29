
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :photo_id
    json.writer comment.writer.username
    json.writer_id comment.writer.id
  end
end
