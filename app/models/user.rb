class User < ApplicationRecord

  validates :username, :email, :img_url, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :photos,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :follows,
    primary_key: :id,
    foreign_key: :followers_id,
    class_name: :Follow

  has_many :follows_from_followers,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :followers,
    source: :followers,
    through: :follows_from_followers

  has_many :followees,
    source: :followees,
    through: :follows

  has_many :likes


  attr_reader :password
  after_initialize :ensure_session_token, :ensure_img_url

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def ensure_img_url
    self.img_url = "image" unless self.img_url
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
