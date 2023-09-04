class User < ApplicationRecord
    has_secure_password
    validates :name,:username,:password,:password_confirmation,presence: true
    has_many :user_pitches
    has_many :pitches, through: :user_pitches


end
