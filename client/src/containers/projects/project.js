import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProjectTable from '../../components/projectTable';

class Project extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ProjectTable
          project={this.props.project}
          meetings={this.props.meetings}
          students={this.props.students}
        />
      </div>
    )
  }
}

export default Project;
