class Api::CommentsController < ApplicationController
  def create
    @user = current_user
    @comment = Comment.new
    @comment.body = params[:body]
    @comment.writer_id = @user.id
    @comment.photo_id = params[:photo_id]

    if @comment.save!
      @photo = @comment.photo
      @comments = @photo.comments
      render 'api/comments/index'
    else
      render @comment.errors.full_messages, status: 401
    end
  end

  def show
    @comment = find_by(params[:id])
    @photo = @comment.photo
    render 'api/comments/index'
  end

  def index
    @photo = Photo.find_by_id(params[:photo_id])
    @comments = []
    @comments.concat(@photo.comments)
    render 'api/comments/index'
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    if @comment
      @photo = @comment.photo
      @comment.destroy
      @comments = @photo.comments
      render 'api/comments/index'
    else
      render json: ["Could not find that comment"], status: 400
    end
  end

  def update
    @comment = find_by(params[:id])
    @photo = @comment.photo
    if @comment && @comment.update_attributes(comment_params)
      render 'api/comments/index'
    elsif !@comment
      render json: ["Could not find that comment"], status: 400
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


end
