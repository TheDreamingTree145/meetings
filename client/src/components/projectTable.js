import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { meetingStudentsFunc, createTableBody } from './../projectFunctions';

class ProjectTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { project } = this.props;

    const meetingStudents = meetingStudentsFunc(project)

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>Email</Table.HeaderCell>
            <Table.HeaderCell singleLine>Student</Table.HeaderCell>
            <Table.HeaderCell singleLine>Issue</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {createTableBody(meetingStudents)}
        </Table.Body>
      </Table>
    )
  }
}


export default ProjectTable;
