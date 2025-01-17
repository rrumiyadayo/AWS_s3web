class CreateScenes < ActiveRecord::Migration[8.0]
  def change
    create_table :scenes do |t|
      t.references :emotion, null: false, foreign_key: true
      t.references :character, null: false, foreign_key: true
      t.text :phrase
      t.string :video_path

      t.timestamps
    end
  end
end
