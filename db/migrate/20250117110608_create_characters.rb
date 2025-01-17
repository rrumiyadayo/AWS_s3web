class CreateCharacters < ActiveRecord::Migration[8.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :anime

      t.timestamps
    end
  end
end
