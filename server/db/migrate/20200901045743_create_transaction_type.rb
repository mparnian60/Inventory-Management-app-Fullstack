class CreateTransactionType < ActiveRecord::Migration[6.0]
  def change
    create_table :transaction_types do |t|
      t.string :transaction_code
      t.string :description
    end
  end
end
