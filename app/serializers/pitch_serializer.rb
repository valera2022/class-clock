class PitchSerializer < ActiveModel::Serializer
  attributes :id,:name,:pitch_average_speed,:history
  has_many :notes
end
