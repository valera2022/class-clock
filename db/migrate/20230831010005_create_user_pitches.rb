class CreateUserPitches < ActiveRecord::Migration[6.1]
  def change
    create_table :user_pitches do |t|
      t.string :user_id
      t.string :pitch_id

      t.timestamps
    end
  end
end
