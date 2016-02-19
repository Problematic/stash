class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.find_by_username(params[:username]) || User.find_by_email(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      respond_with user
    else
      respond_with nil, :status => :unauthorized, :location => nil
    end
  end

  def destroy
    session[:user_id] = nil
  end

  def show
    respond_with current_user
  end
end
