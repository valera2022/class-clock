class PitchesController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        
        pitches = Pitch.all
        render json: pitches
     
    end
    def create 
        # byebug
       
         pitch = Pitch.create!(strong_params)
         pitch.valid? render json: pitch
        
    
    end

    def show 
        user = current_user.pitches.find_by(id: params[:id])
        if user 
            render json: user
        else
            render json: {error: "Not Found"}, status: :unauthorized
        
        end
    
    end

    def destroy 
        # byebug
        user = current_user.pitches.find_by(id: params[:id])
        user.destroy()
    
    end
    def update 
        # byebug
       
        pitch = current_user.pitches.find_by(id: params[:id])
        updated = pitch.update(
          name: params[:name],
          pitch_average_speed: params[:pitch_average_speed]
        )

        render json: pitch
    
    end

    private
   
   

    def strong_params 
       params.permit(:name,:pitch_average_speed,:history)
    end

    
end
