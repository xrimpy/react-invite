class Api::V1::InvitesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  before_action :authenticate_user! 

  def create
    user = User.invite_user!({ email: invite_params[:email] }, current_user)
    if user
      render json: user
    else
      render json: user.errors
    end
  end


  def accept
    user = User.accept_invitation!(invitation_token: invite_params[:token] , password: invite_params[:password])

    if user.id.present?
      render json: user
    else
      render json: { error: 'Invalid token' }
    end
  end


  def index
    render json: Api::V1::UserSerializer.new(User.where(invited_by: current_user).order(id: :desc))
  end

  private

  def invite_params
    params.require(:invitation).permit(:email, :token, :password).to_h
  end

end
