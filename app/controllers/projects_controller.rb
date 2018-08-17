class ProjectsController < ApplicationController

  def show
    @project = Project.friendly.find(params[:id])
    render json: ProjectSerializer.new(@project).serialized_json
  end
end
