class User < ApplicationRecord
    has_secure_password
    validates :name,:username,:password,:password_confirmation,presence: true
    validates :username,uniqueness: true
    has_many :notes
    has_many :pitches, through: :notes


end
