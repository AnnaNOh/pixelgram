class ProfilesController < ApplicationController


  def show
    @user = current_user
    @photos = []
    @photos.concat(@user.photos)
  
  end

end
