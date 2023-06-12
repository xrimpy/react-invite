# frozen_string_literal: true

class CurrentUserController < ApplicationController
  protect_from_forgery with: :null_session
  respond_to :json

  # before_action :authenticate_user!
  def index
    # render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
    render json: UserSerializer.new(User.last).serializable_hash[:data][:attributes], status: :ok
  end
end
