Rails.application.routes.draw do
  resource :session
  resources :users, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  # Had to update to be more granular
  get 'tasks/statuses', to: 'tasks#statuses'
  get 'tasks', to: 'tasks#index'
  get 'tasks/:id', to: 'tasks#show'
  post 'tasks', to: 'tasks#create'
  delete 'tasks/:id', to: 'tasks#destroy'
  put 'tasks/:id', to: 'tasks#update'
end
