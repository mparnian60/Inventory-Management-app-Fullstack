class Product <ApplicationRecord
  has_many :product_transactions

  validates :product_code, uniqueness: { message: 'already exist' }
end