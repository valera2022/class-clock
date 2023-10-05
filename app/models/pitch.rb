class Pitch < ApplicationRecord
    validates :name,:pitch_average_speed, presence: true
    validates :name, uniqueness: true
    has_many  :notes
    has_many :users, through: :notes
 
end
