class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:show]

  def index
    @meetings = Meeting.project_meetings(3)
    options = {include: [:student]}
    render json: MeetingSerializer.new(@meetings, options).serialized_json
  end

  def show
    @meeting = Meeting.find(params[:id])
    render json: @meeting
  end
end
