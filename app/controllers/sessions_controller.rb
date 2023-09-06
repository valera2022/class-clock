class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "Wrong Username or Password"}, status: :unauthorized
        end
    
    end
    def destroy 
        session.clear
    
    end

    private 
    # def strong_params 
    #     params.permit(:username,:password)
    
    # end
end
