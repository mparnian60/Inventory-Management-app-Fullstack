class Api::ProductTransactionsController <ApplicationController
  before_action :user_exists
  before_action :user_admin, except: :index

  def index
    # render json: products.find(params: [:product_code]).product_transaction.all
  end

  def create
    find_product = Product.find(params[:product_id])
    p find_product
    if find_product
      render json: ProductTransaction.create(product_transactions_params)
    end
  end

  private

  def product_transactions_params
    params.required(:product_transaction).permit(:product_id,
                                                 :product_code,
                                                 :transaction_code,
                                                 :quantity,
                                                 :stock_on_hand,
                                                 :product_id)
  end

  end