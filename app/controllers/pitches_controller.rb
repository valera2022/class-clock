class PitchesController < ApplicationController
    before_authorize :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        pitches = current_user.pitches
        render json: pitches
    
    end
    def create 
        pitch = current_user.pitches.create!(strong_params)
        if pitch.valid? render json: command
    
    end

    def show 
        user = current_user.commands.find_by(id: params[:id])
        if user 
            render json: user
        else
            render json: {error: "Not Found"}, status: :unauthorized
        
        end
    
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
