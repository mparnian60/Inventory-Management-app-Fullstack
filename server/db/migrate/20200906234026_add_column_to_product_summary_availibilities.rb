class AddColumnToProductSummaryAvailibilities < ActiveRecord::Migration[6.0]
  def change
    add_column :product_summary_availibilities, :user_id, :integer
  end
end
