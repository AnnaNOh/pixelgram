class Api::LikesController < ApplicationController
  def create

    @user = current_user
    @like = Like.new
    @like.user_id = current_user.id

    @like.photo_id = params[:photo_id]

    if @like.save!
      @photo = @like.photo
      render 'api/photos/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id]);
    @photo = @like.photo

    if @like
      @like.destroy!
      render 'api/photos/show'
    else
      render json: ["Could not find that like"], status: 400
    end
  end

end
