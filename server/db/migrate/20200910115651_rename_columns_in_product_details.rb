class RenameColumnsInProductDetails < ActiveRecord::Migration[6.0]
  def change
    rename_column :products, :planning_fence_rule, :PFR
    rename_column :products, :unit_of_measurement, :UOM
  end
end
