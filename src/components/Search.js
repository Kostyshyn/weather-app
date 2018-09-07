import React, { Component } from 'react';
import {
  Field,
  Control,
  Input
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

class Search extends Component {

  constructor(){
    super();
    this.state = {
      value: ''
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  search(){
    console.log(this.state.value)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Field kind="addons">
        <Control>
          <Input type="text" value={ this.state.value } onChange={ this.handleChange } placeholder="Find a city" />
        </Control>
        <Control>
          <Button color="primary" onClick={ this.search } >
            Search
          </Button>
        </Control>
      </Field> 
    );
  }
}

export default Search;
