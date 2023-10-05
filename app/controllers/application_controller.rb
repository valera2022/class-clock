class ApplicationController < ActionController::API
  include ActionController::Cookies

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def authorize 
      
    return render json: {error: "Not Authorized"},status: :unauthorized unless session.include? :user_id

  end

  def current_user 
    User.find_by(id: session[:user_id])

  end 

end
