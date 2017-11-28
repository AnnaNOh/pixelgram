class ProfilesController < ApplicationController

  def index
    @photos = Photo.all
    render "api/photos/index"
  end

  def show
    @user = User.find_by_username(params[:id])
    @photos = []
    @photos.concat(@user.photos)

  end

end
