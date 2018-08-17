import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search'
import Project from './containers/projects/project';
import { fetchStudents } from './actions/students/students';
import { fetchMeetings } from './actions/meetings/meetings';
import { fetchProjects } from './actions/projects/projects';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
    this.props.fetchMeetings()
    this.props.fetchProjects()
  }

  render() {
    return (
      <div className="ui menu" >
        <div className="item">
          <Search />
          <Project />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchStudents, fetchMeetings, fetchProjects })(App);
