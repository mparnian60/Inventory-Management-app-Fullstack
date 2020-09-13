class ApplicationController < ActionController::API

  def encode_token(user_id, role)
    exp = Time.now.to_i + 4 * 3600
    exp_payload = { id: user_id, role: role, exp: exp }
    JWT.encode(exp_payload, 'windowDog')
  end

  def decode_token
    auth_token = request.headers['Authorization'] # Authorization: 'Bearer TOKENHERE'
    if auth_token
      token = auth_token.split(' ') #split token by space
      # p token
      begin
        payload = JWT.decode token[1], 'windowDog'
        # p payload
        @user_id = payload[0]['id']
        @user = User.find(@user_id)
        p @user
      rescue  StandardError
        nil
      end
    end
  end

  def user_exists
    render json: { message: 'Invalid login' }, status: :unauthorized unless decode_token
  end

  def user_admin
    render json: { message: 'Invalid user' }, status: :unauthorized unless @user.role == 'admin'
  end

  # def user_admin
  #   role = User.find_by(role: params[:role])
  #   render json: { message: 'Invalid Role' } unless role == 'admin'
  # end
  #
  # def user_user
  #   role = User.find_by(role: params[:role])
  #   render json: { message: 'Invalid Role' } unless role == 'user'
  # end

end
