# frozen_string_literal: true

module Api
  module V1
    class SessionsController < Devise::SessionsController
      skip_before_action :verify_authenticity_token
      respond_to :json

      private

      def respond_with(resource, _opts = {})
        render json: {
          status: { code: 200, message: 'Logged in sucessfully.' },
          data: Api::V1::UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }, status: :ok
      end
    end
  end
end
