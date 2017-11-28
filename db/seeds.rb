# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Follow.destroy_all
Like.destroy_all

# Users
user1 = User.create!(username: "user",  email: "email",  password: "password", img_url: "image")
user2 = User.create!(username: "user2", email: "email2", password: "password", img_url: "image2")
user3 = User.create!(username: "user3", email: "email3", password: "password", img_url: "image3")
user4 = User.create!(username: "user4", email: "email4", password: "password", img_url: "image4")
user5 = User.create!(username: "user5", email: "email5", password: "password", img_url: "image5")

# Photos
photo2 = Photo.create!(body: "body2", author_id: user1.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_scale,h_600,w_600/v1511728102/tumblr_njomamiJP51qfirfao1_1280_pf2tpk.jpg")
photo5 = Photo.create!(body: "body5", author_id: user3.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600/v1511726663/vangoghmuseum-s0029V1962-1920_nwkpjd.jpg")
photo9 = Photo.create!(body: "body9", author_id: user5.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_pad,w_400/c_crop,h_600,w_600,x_0,y_300/v1511728159/Art-Poster-Advertisement-WPA-Brookefield-Zoo_kei4am.jpg")
photo4 = Photo.create!(body: "body4", author_id: user2.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_crop,h_600,w_600,x_780,y_80/v1511726666/vangoghmuseum-s0149V1962-1920_fcw1me.jpg")
photo1 = Photo.create!(body: "body1", author_id: user1.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511728108/tumblr_olpc0qs6cb1qfirfao1_1280_hymylh.jpg")
photo7 = Photo.create!(body: "body7", author_id: user4.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_crop,h_600,w_600/v1511728088/Design-Paper-Pattern-Blue-flower-849x1080_ivdkho.jpg")
photo6 = Photo.create!(body: "body6", author_id: user3.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600/v1511726663/vangoghmuseum-s0066V1962-1920_xe8uvp.jpg")
photo10 = Photo.create!(body: "body10", author_id: user5.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511728107/tumblr_nk1aqvkSVE1qfirfao1_1280_zagmbu.jpg")
photo3 = Photo.create!(body: "body3", author_id: user2.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600,w_600,x_0/v1511726662/vangoghmuseum-s0030V1962-1920_ykxgsv.jpg")
photo8 = Photo.create!(body: "body8", author_id: user4.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_700/c_crop,h_600,w_600/v1511728368/Design-Ceramic-Mosaic-pattern.jpt_-687x1080_uv2dvr.jpg")

# Follows
follow1 = Follow.create!(following_id: user2.id, followers_id: user1.id)
follow2 = Follow.create!(following_id: user3.id, followers_id: user1.id)
follow3 = Follow.create!(following_id: user3.id, followers_id: user2.id)
follow4 = Follow.create!(following_id: user4.id, followers_id: user2.id)
follow5 = Follow.create!(following_id: user4.id, followers_id: user3.id)
follow6 = Follow.create!(following_id: user5.id, followers_id: user3.id)
follow7 = Follow.create!(following_id: user5.id, followers_id: user4.id)
follow8 = Follow.create!(following_id: user1.id, followers_id: user4.id)
follow9 = Follow.create!(following_id: user1.id, followers_id: user5.id)
follow10 = Follow.create!(following_id: user2.id, followers_id: user5.id)

# Likes
like1 = Like.create!(user_id: user1.id, photo_id: photo3.id)
like2 = Like.create!(user_id: user1.id, photo_id: photo4.id)
like3 = Like.create!(user_id: user1.id, photo_id: photo5.id)
like4 = Like.create!(user_id: user1.id, photo_id: photo6.id)
like5 = Like.create!(user_id: user2.id, photo_id: photo5.id)
like6 = Like.create!(user_id: user2.id, photo_id: photo6.id)
like7 = Like.create!(user_id: user2.id, photo_id: photo7.id)
like8 = Like.create!(user_id: user2.id, photo_id: photo8.id)
like9 = Like.create!(user_id: user3.id, photo_id: photo7.id)
like10 = Like.create!(user_id: user3.id, photo_id: photo8.id)
like11 = Like.create!(user_id: user3.id, photo_id: photo9.id)
like12 = Like.create!(user_id: user3.id, photo_id: photo10.id)
like13 = Like.create!(user_id: user4.id, photo_id: photo9.id)
like14 = Like.create!(user_id: user4.id, photo_id: photo10.id)
like15 = Like.create!(user_id: user4.id, photo_id: photo1.id)
like16 = Like.create!(user_id: user4.id, photo_id: photo2.id)
like17 = Like.create!(user_id: user5.id, photo_id: photo1.id)
like18 = Like.create!(user_id: user5.id, photo_id: photo2.id)
like19 = Like.create!(user_id: user5.id, photo_id: photo3.id)
like20 = Like.create!(user_id: user5.id, photo_id: photo4.id)

# Comments
comment1 = Comment.create!(writer_id: user1.id, photo_id: photo3.id, body: "Comment1")
comment2 = Comment.create!(writer_id: user1.id, photo_id: photo4.id, body: "Comment2")
comment3 = Comment.create!(writer_id: user2.id, photo_id: photo5.id, body: "Comment3")
comment4 = Comment.create!(writer_id: user2.id, photo_id: photo6.id, body: "Comment4")
comment5 = Comment.create!(writer_id: user3.id, photo_id: photo7.id, body: "Comment5")
comment6 = Comment.create!(writer_id: user3.id, photo_id: photo8.id, body: "Comment6")
comment7 = Comment.create!(writer_id: user4.id, photo_id: photo9.id, body: "Comment7")
comment8 = Comment.create!(writer_id: user4.id, photo_id: photo10.id, body: "Comment8")
comment9 = Comment.create!(writer_id: user5.id, photo_id: photo1.id, body: "Comment9")
comment10 = Comment.create!(writer_id: user5.id, photo_id: photo2.id, body: "Comment10")
comment11 = Comment.create!(writer_id: user1.id, photo_id: photo5.id, body: "Comment11")
comment12 = Comment.create!(writer_id: user1.id, photo_id: photo6.id, body: "Comment12")
comment13 = Comment.create!(writer_id: user2.id, photo_id: photo7.id, body: "Comment13")
comment14 = Comment.create!(writer_id: user2.id, photo_id: photo8.id, body: "Comment14")
comment15 = Comment.create!(writer_id: user3.id, photo_id: photo9.id, body: "Comment15")
comment16 = Comment.create!(writer_id: user4.id, photo_id: photo10.id, body: "Comment16")
comment17 = Comment.create!(writer_id: user4.id, photo_id: photo1.id, body: "Comment17")
comment18 = Comment.create!(writer_id: user4.id, photo_id: photo2.id, body: "Comment18")
