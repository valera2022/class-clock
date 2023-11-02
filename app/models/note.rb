class Note < ApplicationRecord
    validates :content,:pitch_id,presence: true
    validates :user_id, uniqueness:{scope: :pitch_id, message:"not allow to add more than one"}
    belongs_to :pitch
    belongs_to :user
end
