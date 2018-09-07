import React, { Component } from 'react';
import { Loader } from 'react-bulma-components';
import axios from 'axios';

const API_KEY = '4fd3ce5fd381d1971d1dc32cdf1fcaee';

class Weather extends Component {
	 constructor(){
	    super();
	    this.state = {};
	    this.getWeather = this.getWeather.bind(this);
	}
	getWeather(){
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Manchester&APPID=${API_KEY}`).then(res => {
			console.log(res)
		}).catch(err => {

		});	
	}

	componentDidMount(){
		this.getWeather();
	}

  	render() {
    	return (
      		<Loader style={{ 'width': 100, 'height': 100 }} />
    	);
  	}
}

export default Weather;
