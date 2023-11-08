class PitchSerializer < ActiveModel::Serializer
  attributes :id,:name,:average_speed,:history
  has_many :notes
  has_many :users
end
