# frozen_string_literal: true

# frozen_string_literal :true

module Api
  module V1
    class ApplicationSerializer
      include JSONAPI::Serializer

      set_key_transform :came_lower
    end
  end
end
