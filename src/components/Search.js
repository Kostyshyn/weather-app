import React, { Component } from 'react';
import {
  Field,
  Control,
  Input
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  setSearchValue, 
  getWeather,
  loadingOn,
  loadingOff
} from '../store/actions.js';

const API_KEY = '4fd3ce5fd381d1971d1dc32cdf1fcaee';

class Search extends Component {
  constructor(){
    super();
    this.makeWeatherRequest = this.makeWeatherRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  makeWeatherRequest(){
    this.props.loadingOn();
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ this.props.value }&APPID=${ API_KEY }`).then(res => {
    //   console.log(res)
    //   this.props.loadingOff();
    // }).catch(err => {
    //   this.props.loadingOff();
    // });
    let test = {"coord":{"lon":24.71,"lat":48.92},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":295.15,"pressure":1019,"humidity":56,"temp_min":295.15,"temp_max":295.15},"visibility":10000,"wind":{"speed":7,"deg":300,"gust":12},"clouds":{"all":75},"dt":1536583680,"sys":{"type":1,"id":7360,"message":0.0022,"country":"UA","sunrise":1536551462,"sunset":1536597840},"id":707471,"name":"Ivano-Frankivsk","cod":200}
    setTimeout(() => {
      this.props.getWeather(test);
      this.props.loadingOff();
    }, 1000);

  }

  handleChange(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <Field kind="addons">
        <Control>
          <Input type="text" value={ this.props.value } onChange={ this.handleChange } placeholder="Find a city" />
        </Control>
        <Control>
          <Button color="primary" onClick={ this.makeWeatherRequest } >
            Search
          </Button>
        </Control>
      </Field> 
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.searchValue
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: value => dispatch(setSearchValue(value)),
    getWeather: weather => dispatch(getWeather(weather)),
    loadingOn: () => dispatch(loadingOn()),
    loadingOff: () => dispatch(loadingOff())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
