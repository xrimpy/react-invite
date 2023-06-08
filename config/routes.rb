Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

 

namespace :api, defaults: { format: "json" } do
    namespace :v1 do

      resources :users, only: %i[create index show destroy update] do
        collection do
          get :notifications
          get :lookup
          get :invite_lookup
          put :mark_notifications_as_read
        end
      end
      
      get 'recipes/index'
      # post 'invites/create', to: 'invites#create'
      # post 'recipes/create'
      post '/invites', to: 'invites#create'
      get '/invites', to: 'invites#index'
      # delete '/destroy/:id', to: 'recipes#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # devise_for :users, path: '', path_names: {
  #   sign_in: 'login',
  #   sign_out: 'logout',
  #   registration: 'signup'
  # },
  # controllers: {
  #   sessions: 'users/sessions',
  #   registrations: 'users/registrations'
  # }


end