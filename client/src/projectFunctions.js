import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

export function meetingStudentsFunc(project) {
  return project.meetings.map(meeting => {
    const student = project.students.find(student => {
      return student.id == meeting.attributes.student_id
    })
    return _.merge(meeting, student)
  })
}
