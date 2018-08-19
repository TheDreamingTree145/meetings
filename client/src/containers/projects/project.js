import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectTable from '../../components/projectTable';
class Project extends Component {

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

const mapStateToProps = (state) => {
  return {
    project: state.project,
    meetings: state.meetings,
    students: state.students
  }
}

export default connect(mapStateToProps)(Project);
