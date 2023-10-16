class NotesController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        user = current_user.notes

        render json: user
    
    end

    def create 
        # byebug
        #  pitch = Pitch.find_by(id: params[:id])
        #  if pitch.present? # Check if the object is not nil
             note = current_user.notes.create!(strong_params)
             render json: note # Access the user_pitches association
        #   else
        #     render json: {error: "Not valid"}
            
        #   end
          
        
    end

    def destroy
       
        note = current_user.notes.find_by(id: params[:id])
        note.destroy

    
    end
    def update 
       
       
        note = current_user.notes.find_by(id: params[:id])
        updated = note.update(
            content: params[:content]
            
          )
        
          render json: note
    
    end

    private
    def strong_params 
        params.permit(:content,:pitch_id)
    
    end
    

end
