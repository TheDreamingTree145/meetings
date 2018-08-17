class Project < ApplicationRecord
  has_many :meetings
  has_many :students, through: :meetings
end
