


    json.extract! @user, :id, :img_url, :username

    json.photos_count @user.photos.count

    json.follow @user.follows
    json.follows_count @user.follows.count
    json.followers @user.followers
    json.followers_count @user.followers.count

    json.following @user.followers.any?{ |follower| follower.followers_id == current_user.id }
