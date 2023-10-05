Rails.application.routes.draw do

  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"
  post "/signup", to:"users#create"
  get "/me", to:"users#show"
  get "/users", to:"users#index"
  
  # delete "/pitches/:id", to:"pitches#destroy"
  resources :pitches
  resources :notes
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
