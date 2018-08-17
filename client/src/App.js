import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search'
import Project from './containers/projects/project';
import { Switch, Route } from 'react-router-dom';
import { fetchStudents } from './actions/students/students';
import { fetchMeetings } from './actions/meetings/meetings';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        <Search />
        <Switch>
          <Route exact path='/projects/:id' component={Project} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchStudents, fetchMeetings })(App);
