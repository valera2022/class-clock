class PitchesController < ApplicationController
    before_authorize :authorize

    def index 
        pitches = current_user.pitches
        render json: pitches
    
    end
    def create 
    
    end

    def show 
    
    end

    def destroy 
    
    end
    def update 
    
    end

    private
    def current_user 
        User.find_by(id: session[:user_id])
    
    end

    def strong_params 
       params.permit(:name,:pitch_average_speed)
    end

    def authorize 
        return render json: {error: "Not Authorized"},status: :unauthorized unless session.include? :user_id
    
    end
end
