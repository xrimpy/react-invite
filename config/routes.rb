Rails.application.routes.draw do
  # get '/current_user', to: 'current_user#index'
  
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
      post '/invites', to: 'invites#create'
      post '/invites/accept', to: 'invites#accept'
      get '/invites', to: 'invites#index'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
  

end