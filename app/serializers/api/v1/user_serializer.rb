# frozen_string_literal: true

module Api
  module V1
    class UserSerializer < Api::V1::ApplicationSerializer
      attributes :id, :email, :created_at

      attribute :sent_at do |record|
        record.invitation_sent_at.strftime('%d %b %Y') if record.invitation_sent_at.present?
      end
    end
  end
end
