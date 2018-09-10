export const setSearchValue = (value) => {
	return {
		type: 'SEARCH',
		payload: value
	}
};

export const loadingOn = () => {
	return {
		type: 'LOADING_ON'
	}
};

export const loadingOff = () => {
	return {
		type: 'LOADING_OFF'
	}
};

export const getWeather = (weather) => {

	return {
		type: 'GET_WEATHER',
		payload: weather
	}
};