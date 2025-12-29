class UsersController < ApplicationController
  allow_unauthenticated_access only: %i[ create ]
  
  def create
    @users = User.new(user_params)
    if @users.save
      render json: @users, status: :created
    else
      render json: { errors: @users.errors.full_messages }, status: :unprocessable_entity
    end
  end 

  private
    def user_params
        params.permit(:email_address, :first_name, :last_name, :password, :password_confirmation)    
    end

end
