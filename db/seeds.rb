Project.create!(name: "CLI Data Gem")
Project.create!(name: "Sinatra")
Project.create!(name: "Rails")
Project.create!(name: "jQuery")
Project.create!(name: "React")


400.times do
  Student.create!(name: Faker::Name.name, email: Faker::Internet.email)
end

1000.times do
  Meeting.create!(
    date: Faker::Date.between(2.days.ago, Date.today),
    issue: Faker::DumbAndDumber.quote,
    project_id: Project.all.sample.id,
    student_id: Student.all.sample.id
  )
end
