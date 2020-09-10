class CreateProductDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :product_details do |t|
      t.string :product_code
      t.string :product_description
      t.string :unit_of_measurement
      t.string :planning_fence_rule
      t.integer :MOQ
      t.integer :safety_stock
      t.string :supplier_name
      t.integer :lead_time
    end
  end
end
