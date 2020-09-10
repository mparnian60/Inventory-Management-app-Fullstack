class Api::ProductsController <ApplicationController
  before_action :user_exists

  def index
    render json: User.find(@user_id).products.all
  end

  def create
    if @user.role != 'admin'
      render json: {message: 'Unauthorized user'}, status: :unauthorized
    else
      render json: User.find(@user_id).products.create(products_params)
    end
  end

  def show
    render json: User.find(@user_id).products.find(params[:id])
  end

  def update
    product = User.find(@user_id).products.find(params[:id])
    render json: product.update(products_params)
  end

  def destroy
    render json: User.find(@user_id).products.destroy(params[:id])
  end

  def details
    p params[:id]
    render json: User.find(@user_id).products.find(params[:product_code])
  end


  private

  def products_params
    params.required(:product).permit(:product_code,
                                     :product_description,
                                     :unit_of_measurement,
                                     :planning_fence_rule,
                                     :MOQ,
                                     :safety_stock,
                                     :supplier_name,
                                     :lead_time)
  end
end