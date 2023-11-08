class Pitch < ApplicationRecord
    validates :name,:average_speed,:history, presence: true
    validates :name, uniqueness: true
    has_many  :notes
    has_many :users, through: :notes
 
end
