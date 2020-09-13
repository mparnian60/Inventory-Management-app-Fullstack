class Api::UsersController < ApplicationController
  before_action :user_exists, except: :create

  def index
    user = User.find(@user_id)
    render json: { id: user.id, name: user.name, role: user.role }
  end

  def create
    user = User.create({ name: params[:name], password: params[:password], role: params[:role] })
    if user.valid?
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :not_acceptable
    end
  end

  def update
    render json: User.find_by(@user_id).update(user_params)
  end

  def destroy
    render json: User.destroy(@user_id)
  end

  private

  def user_params
    params.required(:user).permit(:name, :password, :role)
  end

end