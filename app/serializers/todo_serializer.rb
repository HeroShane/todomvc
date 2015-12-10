class TodoSerializer < ActiveModel::Serializer
  attributes :id, :content, :state

end

