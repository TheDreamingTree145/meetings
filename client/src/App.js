import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search'
import Project from './containers/projects/project';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchStudents } from './actions/students/students';
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
          <Route exact path='/projects/:id' render={props => <Project {...props}
            project={this.props.project}
            meetings={this.props.meetings}
            students={this.props.students}
            />}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    project: {
      name: state.project.name,
      meetings: state.project.meetings,
      students: state.project.meetings
    }
  }
}

export default connect(mapStateToProps, { fetchStudents })(App);
