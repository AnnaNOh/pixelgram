class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new
    @user = User.find_by_id(params[:id])

    @follow.following_id = params[:id]
    @follow.followers_id = current_user.id


    unless @follow.save
      flash[:errors] = @follow.errors.full_messages
    end
    render 'users/show'
  end

  def destroy
    @follow = Follow.find_by(following_id: params[:id], followers_id: current_user.id)
    @user = User.find_by_id(@follow.followees.id)
    @follow.destroy
    render 'users/show'
  end



end
