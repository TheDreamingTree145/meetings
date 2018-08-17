class AddColumnProjectIdToMeetings < ActiveRecord::Migration[5.2]
  def change
    add_column :meetings, :project_id, :integer
  end
end
