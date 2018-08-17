class MeetingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :issue
  belongs_to :student
  belongs_to :project
end
