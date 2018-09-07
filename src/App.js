import React, { Component } from 'react';
import './App.css';
import { Section, Container, Heading } from 'react-bulma-components';

import Search from './components/Search.js';
import Weather from './components/Weather.js';

class App extends Component {
  render() {
    return (
      <Section size="medium">
        <Container>
          <Heading>React Weather App</Heading>

          <Search />

          <Weather />

        </Container>
      </Section>
    );
  }
}

export default App;
