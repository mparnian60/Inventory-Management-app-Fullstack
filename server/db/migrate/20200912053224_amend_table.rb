class AmendTable < ActiveRecord::Migration[6.0]
  def change
    add_column :product_transactions, :product_id, :integer
    remove_column :product_transactions, :user_id
  end
end
