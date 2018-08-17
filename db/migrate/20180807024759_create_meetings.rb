class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.datetime :date
      t.string :project
      t.string :issue
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
