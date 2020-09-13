# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_12_053224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "product_transactions", id: :bigint, default: -> { "nextval('product_summary_availibilities_id_seq'::regclass)" }, force: :cascade do |t|
    t.string "product_code"
    t.date "transaction_date"
    t.string "transaction_code"
    t.integer "quantity"
    t.integer "stock_on_hand"
    t.integer "product_id"
  end

  create_table "products", id: :bigint, default: -> { "nextval('product_details_id_seq'::regclass)" }, force: :cascade do |t|
    t.string "product_code"
    t.string "product_description"
    t.string "UOM"
    t.string "PFR"
    t.integer "MOQ"
    t.integer "safety_stock"
    t.string "supplier_name"
    t.integer "lead_time"
  end

  create_table "supplier_details", force: :cascade do |t|
    t.string "supplier_code"
    t.string "supplier_name"
    t.string "supplier_address"
    t.string "supplier_phone_number"
    t.integer "user_id"
  end

  create_table "transaction_types", force: :cascade do |t|
    t.string "transaction_code"
    t.string "description"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "role"
  end

end
