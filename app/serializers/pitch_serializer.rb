class PitchSerializer < ActiveModel::Serializer
  attributes :id,:name,:pitch_average_speed
  has_many :notes
end
