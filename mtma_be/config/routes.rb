Rails.application.routes.draw do
  resource :session
  resources :users, only: [:create]
  resources :tasks, param: :id, only: [:show, :destroy, :update]
  resources :tasks, only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  get 'tasks/statuses', to: 'tasks#statuses'
end
