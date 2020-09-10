class CreateSupplierDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :supplier_details do |t|
      t.string :supplier_code
      t.string :supplier_name
      t.string :supplier_address
      t.integer :supplier_phone_number
    end
  end
end
