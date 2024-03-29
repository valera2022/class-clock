class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def index
        users = User.all
        render json:users
    
    end
    
    
    def create 
        user = User.create!(strong_params)
        user.valid? session[:user_id] = user.id
        render json: user
    end

    def show 
       user = User.find_by(id: session[:user_id])
       if user 
          render json: user
       else
        render json: {error: "Not Authorized"}, status: 401 
       end
    
    end
    
   
    private

    def strong_params 
        params.permit(:name,:username,:password,:password_confirmation )
    
    end
    
 

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  # end



end
