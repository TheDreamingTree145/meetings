class Meeting < ApplicationRecord
  belongs_to :student
  belongs_to :project, optional: :true
end
