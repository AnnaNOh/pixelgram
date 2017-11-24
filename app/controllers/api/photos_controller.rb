class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render @photo.errors.full_messages, status: 401
    end
  end

  def update
    @photo = find_by(params[:id])
    if @photo && @photo.update_attributes(photo_params)
      render :show
    elsif !@photo
      render json: ["Could not find that photo"], status: 400
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  def show
    @photo = find_by(params[:id])
  end

# change this to select relevant photos later
  def index
    @photos = Photo.all
  end

  def destroy
    @photo = find_by(params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render ["Could not find that photo"]
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :body, :author_id)
  end

end
