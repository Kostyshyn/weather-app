import React, { Component } from 'react';
import { Loader } from 'react-bulma-components';
import { connect } from 'react-redux';

class Weather extends Component {
	constructor(){
	    super();
	}

	componentDidMount(){

	}

  	render() {
  		const loading = this.props.loading;
  		let content;

     	if (loading){
    		content = (
    				<div className="loader-wrapper">
    					<Loader style={{ 'width': 100, 'height': 100 }} />
    				</div>
    			);
    	} else {
    		content = <h1> It is weather</h1>;
    	}
    	return (
    		<div>

    			{ content }

      		</div>
    	);
  	}
}

const mapStateToProps = state => {
  	return {
  		loading: state.loading,
    	weather: state.weather
  	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Weather);

