# frozen_string_literal :true

class Api::V1::ApplicationSerializer
    include JSONAPI::Serializer
 
    set_key_transform :came_lower
 end
 