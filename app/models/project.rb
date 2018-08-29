class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :meetings
  has_many :students, through: :meetings
end
