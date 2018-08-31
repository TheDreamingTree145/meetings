import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { meetingStudentsFunc, createTableBody } from './../projectFunctions';

class ProjectTable extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    if (this.props.project.meetings.length != nextProps.project.meetings.length) {
      return true
    }
  }

  render() {
    const { project } = this.props;
    const meetingStudents = meetingStudentsFunc(project)

    function createTableBody(meetingStudents) {
      return meetingStudents.map((el) => {
        const { attributes } = el
        return(
          <Table.Row key={attributes.issue}>
            <Table.Cell>{attributes.date}</Table.Cell>
            <Table.Cell>{attributes.name}</Table.Cell>
            <Table.Cell>{attributes.email}</Table.Cell>
            <Table.Cell>{attributes.issue}</Table.Cell>
          </Table.Row>
        )
      })
    }

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{project.name}</Table.HeaderCell>
          </Table.Row>
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
