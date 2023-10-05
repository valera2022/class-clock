class Note < ApplicationRecord
    validates :content,:pitch_id,presence: true
    belongs_to :pitch
    belongs_to :user
end
