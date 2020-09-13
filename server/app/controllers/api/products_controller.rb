class Api::ProductsController <ApplicationController
  before_action :user_exists
  before_action :user_admin, except: :index

  def index
    render json: Product.all.order(:id)
  end


  def create
    new_product = Product.create(products_params)
    if new_product.valid?
      render json: new_product
    else
      render json: { errors: new_product.errors.full_messages }, status: :not_acceptable
    end

  end

  def show
    render json: Product.find(params[:id])
  end

  def update
    find_product = Product.find(params[:id])
    if find_product.valid?
      update_product = find_product.update(products_params)
      render json: update_product
    else
      render json: { errors: product_code.errors.full_messages }, status: :not_acceptable
    end
  end

  def destroy
    render json: Product.destroy(params[:id])
  end

  def show_products
    render json: Product.reselect(:id, :product_code, :product_description)
  end

  def details
    p params[:id]
    render json: Product.find(params[:product_code])
  end


  private

  def products_params
    params.required(:product).permit(:product_code,
                                     :product_description,
                                     :UOM,
                                     :PFR,
                                     :MOQ,
                                     :safety_stock,
                                     :supplier_name,
                                     :lead_time)
  end
end