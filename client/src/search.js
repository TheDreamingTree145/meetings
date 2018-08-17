import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import options from './constants/options';

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
      term: event.target.textContent.toLowerCase()
    })
  }

  render() {
    return(
      <div>
        <Dropdown inline placeholder="Select a Project" onChange={this.handleOnChange} options={options} />
      </div>
    )
  }

}

export default Search;
