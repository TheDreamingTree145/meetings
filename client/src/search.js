import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import options from './constants/options';
import { fetchProject } from './actions/projects/projects';

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
      term: event.target.textContent
    })
    this.handleOnSubmit(this.state.term)
  }

  handleOnSubmit = (term) => {
    this.props.fetchProject(term)
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

export default Search;
