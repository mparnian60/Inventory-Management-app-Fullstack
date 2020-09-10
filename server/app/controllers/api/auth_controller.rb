class Api::AuthController < ApplicationController
  before_action :user_exists, except: :login

  def login
    user = User.find_by(name: params[:name])

    if user&.authenticate(params[:password])
      token = encode_token user.id, user.role
      render json: { user: { id: user.id, name: user.name, token: token } }
    else
      render json: { message: 'invalid user' }, status: :not_found
    end
  end

  def status
    render json: { message: 'valid user', id: @user_id }, status: 202
  end
end