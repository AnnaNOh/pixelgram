class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :writer_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :comments, :writer_id
    add_index :comments, :photo_id
  end
end
