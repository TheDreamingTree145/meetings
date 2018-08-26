import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import meetingStudentsFunc from './../projectFunctions';

const ProjectTable = (props) => {
  const meetingStudent = meetingStudentsFunc(props)
  debugger;

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Date</Table.HeaderCell>
          <Table.HeaderCell singleLine>Student</Table.HeaderCell>
          <Table.HeaderCell singleLine>Issue</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      </Table.Body>
    </Table>
  )

}


export default ProjectTable;
