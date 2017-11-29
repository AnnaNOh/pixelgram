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
user1 = User.create!(username: "user",  email: "email",  password: "password", img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_crop,h_600,w_600/v1511940449/810px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project__454045_apujpv.jpg")
user2 = User.create!(username: "user2", email: "email2", password: "password", img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600,x_70/v1511940348/bunch_of_flowers_mixed_flower_cut_flower-635144_bpwaai.jpg")
user3 = User.create!(username: "user3", email: "email3", password: "password", img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511940343/antelope_canyon_lower_canyon_arizona_antelope_slot_navajo_light-664788_xg7pcf.jpg")
user4 = User.create!(username: "user4", email: "email4", password: "password", img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600,x_120/v1511941067/Shibainu_Maru_te0djc.jpg")
user5 = User.create!(username: "user5", email: "email5", password: "password", img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_crop,h_600,w_600,y_20/v1511941064/Paul_Klee_1911_nq4x8r.jpg")

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
photo11 = Photo.create!(body: "body11", author_id: user1.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600,x_305/v1511939814/13668224033_20cced9b45_b_vg45qq.jpg")
photo12 = Photo.create!(body: "body12", author_id: user2.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/c_crop,h_600,w_600/v1511939813/larger_i4uml3.jpg")
photo13 = Photo.create!(body: "body13", author_id: user3.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_crop,h_600,w_600/v1511939813/fire-in-the-evening-paul-klee_fcajbe.jpg")
photo14 = Photo.create!(body: "body14", author_id: user4.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,h_600/v1511939491/lvtcrkpcjbftprmfhwut.jpg")
photo15 = Photo.create!(body: "body15", author_id: user5.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_scale,w_600/c_thumb,h_600,w_600/v1511939815/hb_42.167_zi39gz.jpg")
photo16 = Photo.create!(body: "body16", author_id: user1.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939816/hb_2001.205_rjarja.jpg")
photo17 = Photo.create!(body: "body17", author_id: user2.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939816/hb_46.73.2_hczlhl.jpg")
photo18 = Photo.create!(body: "body18", author_id: user3.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939816/hb_62.24_kg7b9f.jpg")
photo19 = Photo.create!(body: "body19", author_id: user4.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939820/hb_1993.132_ur4j74.jpg")
photo20 = Photo.create!(body: "body20", author_id: user5.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_crop,h_620,w_620,x_215,y_420/v1511939816/hb_15.5.1_jn26ac.jpg")
photo21 = Photo.create!(body: "body21", author_id: user1.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939814/hb_49.30_i6kirq.jpg")
photo22 = Photo.create!(body: "body22", author_id: user2.id, img_url: "http://res.cloudinary.com/annaoh/image/upload/c_thumb,h_600,w_600/v1511939749/hb_59.142_fb6isq.jpg")





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
