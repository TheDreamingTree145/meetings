class Student < ApplicationRecord
  has_many :meetings
  has_many :projects, through: :meetings
end
