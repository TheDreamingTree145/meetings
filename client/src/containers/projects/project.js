import React, { Component } from 'react';
import { connect } from 'react-redux';
class Project extends Component {

  render() {
    return(
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Project);
