class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:show]

  def index
    @meetings = Project.find_by_slug(params[:project_name]).meetings
    options = {include: [:student, 'student.name']}
    render json: MeetingSerializer.new(@meetings, options).serialized_json
  end

  def show
    @meeting = Meeting.find(params[:id])
    render json: @meeting
  end
end
