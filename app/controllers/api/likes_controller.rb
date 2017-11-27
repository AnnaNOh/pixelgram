class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.photo_id = params[:photo_id]


    unless @like.save
      flash json: @like.errors.full_messages, status: 422
    end
    render 'api/photos'
  end

  def destroy
    @like = current_user.likes.find_by(photo_id: params[:photo_id])

    if @like
      @like.destroy!
      render 'api/photos'
    else
      render json: ["Could not find that like"], status: 400
    end
  end

end
