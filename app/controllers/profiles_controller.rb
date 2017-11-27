class ProfilesController < ApplicationController


  def show
    @user = User.find_by_username(params[:id])
    @photos = []
    @photos.concat(@user.photos)

  end

end
