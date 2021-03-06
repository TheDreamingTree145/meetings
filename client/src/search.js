import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import options from './constants/options';
import { fetchProjectMeetings } from './actions/projects/project';
import { fetchMeetings } from './actions/meetings/meetings';
import history from './history';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      term: event.target.textContent.replace(/\s+/g, '-').toLowerCase()
    }, () => {
      this.handleOnSubmit(this.state.term)
    })
  }

  handleOnSubmit = (term) => {
    this.props.fetchProjectMeetings(term)
    history.push('/projects/' + term)
  }

  render() {
    return(
      <Form>
        <Form.Field inline>
          <Dropdown placeholder='Project' onChange={this.handleOnChange} fluid search selection options={options} />
        </Form.Field>
      </Form>
    )
  }
}


export default connect(null, { fetchProjectMeetings })(Search);
