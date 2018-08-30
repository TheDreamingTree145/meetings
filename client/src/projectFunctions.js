import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

export function createTableBody(meetingStudents) {
  return meetingStudents.map((el) => {
    const { attributes } = el
    return(
      <Table.Row key={el.id}>
        <Table.Cell>{attributes.date}</Table.Cell>
        <Table.Cell>{attributes.name}</Table.Cell>
        <Table.Cell>{attributes.email}</Table.Cell>
        <Table.Cell>{attributes.issue}</Table.Cell>
      </Table.Row>
    )
  })
}

export function meetingStudentsFunc(project) {
  return project.meetings.map(meeting => {
    const student = project.students.find(student => {
      return student.id == meeting.attributes.student_id
    })
    return _.merge(meeting, student)
  })
}
