class Meeting < ApplicationRecord
  belongs_to :student
  belongs_to :project, optional: :true

  scope :project_meetings, -> (project_id) { where("project_id = ?", project_id) }

end
