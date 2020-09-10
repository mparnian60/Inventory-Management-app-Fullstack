class AddColumnToProductDetails < ActiveRecord::Migration[6.0]
  def change
    add_column :product_details, :user_id, :integer
  end
end
