class MeetingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :issue, :student_id
  belongs_to :student
  belongs_to :project
end
