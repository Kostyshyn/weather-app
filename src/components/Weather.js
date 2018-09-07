import React, { Component } from 'react';
import { Loader } from 'react-bulma-components';

class Weather extends Component {
  	render() {
    	return (
      		<Loader style={{ 'width': 100, 'height': 100 }} />
    	);
  	}
}

export default Weather;
