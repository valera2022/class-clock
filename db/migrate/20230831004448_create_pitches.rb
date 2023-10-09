class CreatePitches < ActiveRecord::Migration[6.1]
  def change
    create_table :pitches do |t|
      t.string :name
      t.string :pitch_average_speed
      t.text :history

      t.timestamps
    end
  end
end
