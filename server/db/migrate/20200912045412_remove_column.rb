class RemoveColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :user_id
  end
end
