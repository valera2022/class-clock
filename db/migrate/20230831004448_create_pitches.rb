class CreatePitches < ActiveRecord::Migration[6.1]
  def change
    create_table :pitches do |t|
      t.string :name
      t.integer :average_speed
      t.text :history

      t.timestamps
    end
  end
end
