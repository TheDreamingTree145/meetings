class ProjectsController < ApplicationController

  def show
    @project = Project.friendly.find(params[:id])
    options = {include: [:meetings, :students]}
    render json: ProjectSerializer.new(@project, options).serialized_json
  end
end
