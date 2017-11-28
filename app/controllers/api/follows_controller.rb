class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new
    @follow.following_id = params[:user_id]
    @follow.followers_id = current_user.id

    unless @follow.save
      flash[:errors] = @follow.errors.full_messages
    end
    redirect_to user_url(params[:id])
  end

  def destroy
    @follow = Follow.find(params[:user_id])
    @follow.destroy
    redirect_to user_url(@follow.following_id)
  end



end
