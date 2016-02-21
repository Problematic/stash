class AuthController < ApplicationController
  respond_to :json

  def verify_token
    uri = URI("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{params[:id_token]}")
    res = Net::HTTP.get_response uri
    data = JSON.parse res.body

    if data['aud'] == ENV['GOOGLE_CLIENT_ID']
      user = User.find_or_create_by(google_id: data['sub']) do |user|
        user.email = data['email']
      end
      session[:user_id] = user.id

      render(json: user.to_builder.target!) and return
    end

    respond_with nil, :status => :unauthorized, :location => nil
  end
end
