class NoteSerializer < ActiveModel::Serializer
  attributes :id,:content,:pitch_id,:user_id
  belongs_to :pitch
end
