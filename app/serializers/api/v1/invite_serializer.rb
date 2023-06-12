# frozen_string_literal: true

module Api
  module V1
    class InviteSerializer < Api::V1::ApplicationSerializer
      attributes :id,
                 :email
    end
  end
end
