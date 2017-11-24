class Follow < ApplicationRecord

  validates :followers_id, :following_id, presence: true

  belongs_to :followers,
    primary_key: :id,
    foreign_key: :followers_id,
    class_name: :User

  belongs_to :followees,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User



end
