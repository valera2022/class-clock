class Pitch < ApplicationRecord
    has_many  :user_pitches
    has_many :users, through :user_pitches
end
