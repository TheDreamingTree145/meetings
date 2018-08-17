class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :meetings
  has_many :projects, through: :meetings
end
