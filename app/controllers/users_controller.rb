class UsersController < ApplicationController
    def create 
    
    end
    def show 
       user = User.find_by(id: session[:user_id])
       if user 
          render json: user
       else
        render json: {error: "Not Authorized"}, status: 401 
       end
    
    end
end
