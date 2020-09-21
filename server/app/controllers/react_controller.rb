class ReactController <ActionController::Base

  #below line render a file, in all our previous controller we render json but here is a file
  def react_app
    render file: "#{Rails.root}/public/index.html", content_type: 'text/html', layout: false, formats: :html
  end

end