class User <ApplicationRecord
  has_secure_password
  
  validates :name, uniqueness: { message: 'no duplicates' }
  validates :name, :password_digest, presence: true
  # validates :password_digest, length: { in: 6..20, wrong_length: "password need to have minimum 6 characters" } }

end
