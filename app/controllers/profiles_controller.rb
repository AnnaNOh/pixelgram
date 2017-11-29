class ProfilesController < ApplicationController

  def index
    @photos = Photo.all
    render "api/photos/index"
  end

  def show

    puts 'the params are!'
    puts (params)

    @user = User.find_by_username(params[:username])
    @photos = []
    @photos.concat(@user.photos)

  end

end
