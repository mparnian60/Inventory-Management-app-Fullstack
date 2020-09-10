class AddColumnToSupplierDetails < ActiveRecord::Migration[6.0]
  def change
    add_column :supplier_details, :supplier_phone_number, :string
  end
end
