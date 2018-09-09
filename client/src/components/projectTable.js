import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { meetingStudentsFunc, createTableBody } from './../projectFunctions';
import Moment from 'react-moment'
import 'moment-timezone';

class ProjectTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { project } = this.props;
    const meetingStudents = meetingStudentsFunc(project)
    function createTableBody(meetingStudents) {
      return meetingStudents.map((el, index) => {
        const { attributes } = el
        const dateToFormat = attributes.date
        return(
          <Table.Row key={attributes.index}>
            <Table.Cell><Moment tz='America/Detroit'>{dateToFormat}</Moment></Table.Cell>
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
