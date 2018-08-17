class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :meetings
  has_many :students, through: :meetings
end
