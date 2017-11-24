class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :followers_id, null:false
      t.integer :following_id, null:false

      t.timestamps
    end
    
    add_index :follows, :followers_id
    add_index :follows, :following_id
  end
end
