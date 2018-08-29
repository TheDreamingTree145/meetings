export default function(props) {
  if (props.meetings[0] && props.meetings[0].data.length) {

    const meetingStudentsArr = []
    const meetingStudents = props.meetings[0].data.forEach(meeting => {
      const newHash = meeting.attributes
      const student = props.students[0].find(student => {
        return student.id == meeting.relationships.student.data.id
      })
      newHash["student"] = student
      meetingStudentsArr.push(newHash)
    })
    return meetingStudentsArr
  }
}
