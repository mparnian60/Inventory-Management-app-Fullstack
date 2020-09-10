class RemoveFieldNameFromTableName < ActiveRecord::Migration[6.0]
  def change
    remove_column :supplier_details, :supplier_phone_number, :integer
  end
end
