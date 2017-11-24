Rails.application.routes.draw do

  namespace :api do
    get 'follows/create'
  end

  namespace :api do
    get 'follows/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :photos, only: [:index]
    end
    
    resource :session, only: [:create, :destroy, :show]
    resources :photos
  end

end
