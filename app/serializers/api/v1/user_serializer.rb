class Api::V1::UserSerializer < Api::V1::ApplicationSerializer
    
    attributes :id, :email, :created_at

    attribute :sent_at do |record|
        record.invitation_sent_at.strftime('%d %b %Y') if record.invitation_sent_at.present?
    end

end