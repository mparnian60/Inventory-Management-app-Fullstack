class AddColumnToProductDetailsa < ActiveRecord::Migration[6.0]
  def change
    add_column :supplier_details, :user_id, :integer
  end
end
