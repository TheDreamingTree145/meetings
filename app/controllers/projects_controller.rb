class ProjectsController < ApplicationController

  def show
    @project = Project.find(params[:id])
    render jsonapi: Project.all
  end
end
