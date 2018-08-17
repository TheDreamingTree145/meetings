import React, { Component } from 'react';
import { connect } from 'react-redux';
class Project extends Component {

  render() {
    return(
      <div>
        Hello World
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
