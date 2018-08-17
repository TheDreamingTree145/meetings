class Meeting < ApplicationRecord
  belongs_to :student
  belongs_to :project, optional: :true

  scope :project_meetings, -> (project) { where("meetings.project_id = ?", project) }
end
