class Photo < ApplicationRecord

  validates :img_url, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :comments
end
