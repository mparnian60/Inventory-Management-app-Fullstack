class CreateProductSummaryAvailibility < ActiveRecord::Migration[6.0]
  def change
    create_table :product_summary_availibilities do |t|
      t.string :product_code
      t.date :transaction_date
      t.string :transaction_code
      t.integer :quantity
      t.integer :stock_on_hand
    end
  end
end
