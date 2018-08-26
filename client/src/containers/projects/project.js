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
        HELLO WORLD
      </div>
    )
  }
}

export default Project;
