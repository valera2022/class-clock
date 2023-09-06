class UserPitch < ApplicationRecord
    validates :name,:pitch_average_speed,presence: true
    belongs_to :pitch
    belongs_to :user
end
