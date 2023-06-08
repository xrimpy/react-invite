class Api::V1::InvitesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  # before_action :set_email, only: %i[create]
  before_action :authenticate_user! 

  def create
    user = User.invite!({ email: invite_params[:email] }, current_user)
    # recipe = Recipe.create!(recipe_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end


  def index
    sleep 1
    render json: Api::V1::UserSerializer.new(User.all)
  end

  private

  def invite_params
    params.require(:invitation).permit(:email).to_h
  end

  def set_email
    @recipe = Recipe.find(params[:id])
  end
end
