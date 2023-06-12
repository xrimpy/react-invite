# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :invitable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  attr_accessor :invitation_instructions

  def self.invite_user!(attributes = {}, invited_by = nil)
    invite!(attributes, invited_by) do |invitable|
      invitable.invitation_instructions = :guest_invitation_instructions
    end
  end
end
