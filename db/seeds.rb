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


photo1 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511728108/tumblr_olpc0qs6cb1qfirfao1_1280_hymylh.jpg", body: "body1", author_id: user1.id)
photo2 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_scale,h_600,w_600/v1511728102/tumblr_njomamiJP51qfirfao1_1280_pf2tpk.jpg", body: "body2", author_id: user1.id)
photo3 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600,x_0/v1511726662/vangoghmuseum-s0030V1962-1920_ykxgsv.jpg", body: "body3", author_id: user2.id)
photo4 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_crop,h_600,w_600,x_780,y_80/v1511726666/vangoghmuseum-s0149V1962-1920_fcw1me.jpg", body: "body4", author_id: user2.id)
photo5 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600/v1511726663/vangoghmuseum-s0029V1962-1920_nwkpjd.jpg", body: "body5", author_id: user3.id)
photo6 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600/v1511726663/vangoghmuseum-s0066V1962-1920_xe8uvp.jpg", body: "body6", author_id: user3.id)
photo7 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_crop,h_600,w_600/v1511728088/Design-Paper-Pattern-Blue-flower-849x1080_ivdkho.jpg", body: "", author_id: user4.id)
photo8 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_700/c_crop,h_600,w_600/v1511728368/Design-Ceramic-Mosaic-pattern.jpt_-687x1080_uv2dvr.jpg", body: "", author_id: user4.id)
photo9 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_pad,w_400/c_crop,h_600,w_600,x_0,y_300/v1511728159/Art-Poster-Advertisement-WPA-Brookefield-Zoo_kei4am.jpg", body: "", author_id: user4.id)
photo10 = Photo.create!(img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511728107/tumblr_nk1aqvkSVE1qfirfao1_1280_zagmbu.jpg", body: "body10", author_id: user1.id)


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
