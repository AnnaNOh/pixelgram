class Comment < ApplicationRecord

  validates :body, :writer_id, :photo_id, presence: true

  belongs_to :writer,
    primary_key: :id,
    foreign_key: :writer_id,
    class_name: :User

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

end
