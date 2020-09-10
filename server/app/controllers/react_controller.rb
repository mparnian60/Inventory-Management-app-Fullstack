class ReactController <ActionController::Base

  def react_app
    render :file => "#{Rails.root}/public/index.html", content_type: 'text/html', layout: false, formats: :html
  end

end