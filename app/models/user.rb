class User < ApplicationRecord
    has_secure_password
    has_many :user_pitches
    has_many :pitches, through: :user_pitches


end
