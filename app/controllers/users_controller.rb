class UsersController < ApplicationController
  def show
    @user = User.find_by_username(params[:username])
    render
  end
  
  def index
  end

  def create
  end

  def delete
  end

  def update
  end

  def new
  end

  def destroy
  end
end
