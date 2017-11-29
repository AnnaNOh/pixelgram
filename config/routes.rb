Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :photos, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:index, :show, :create, :update, :destroy] do
    end
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :show, :index, :update ]
    resources :follows, only: [:create, :destroy]
  end

  resources :profiles, :defaults => {:format => 'json'}
  resources :users, :defaults => {:format => 'json'}
end
