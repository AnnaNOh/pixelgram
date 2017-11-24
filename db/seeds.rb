# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

user1 = User.create!(username: "user",  email: "email",  password: "password", img_url: "image")
user2 = User.create!(username: "user2", email: "email2", password: "password", img_url: "image2")
user3 = User.create!(username: "user3", email: "email3", password: "password", img_url: "image3")
user4 = User.create!(username: "user4", email: "email4", password: "password", img_url: "image4")
user5 = User.create!(username: "user5", email: "email5", password: "password", img_url: "image5")


photo1 = Photo.create!(img_url: "image1-1", body: "body1", author_id: user1.id)
photo2 = Photo.create!(img_url: "image1-2", body: "body2", author_id: user1.id)
photo3 = Photo.create!(img_url: "image2-1", body: "body3", author_id: user2.id)
photo4 = Photo.create!(img_url: "image2-2", body: "body4", author_id: user2.id)
photo5 = Photo.create!(img_url: "image3-1", body: "body5", author_id: user3.id)
photo6 = Photo.create!(img_url: "image3-2", body: "body6", author_id: user3.id)
photo7 = Photo.create!(img_url: "image4-1", body: "body7", author_id: user4.id)
photo8 = Photo.create!(img_url: "image4-2", body: "body8", author_id: user4.id)
photo9 = Photo.create!(img_url: "image5-1", body: "body9", author_id: user5.id)


follow1 = Follow.create!(following_id: user2.id, followers_id: user1.id)
follow1 = Follow.create!(following_id: user3.id, followers_id: user1.id)
follow1 = Follow.create!(following_id: user3.id, followers_id: user2.id)
follow1 = Follow.create!(following_id: user4.id, followers_id: user2.id)
follow1 = Follow.create!(following_id: user4.id, followers_id: user3.id)
follow1 = Follow.create!(following_id: user5.id, followers_id: user3.id)
follow1 = Follow.create!(following_id: user5.id, followers_id: user4.id)
follow1 = Follow.create!(following_id: user1.id, followers_id: user4.id)
follow1 = Follow.create!(following_id: user1.id, followers_id: user5.id)
follow1 = Follow.create!(following_id: user2.id, followers_id: user5.id)
