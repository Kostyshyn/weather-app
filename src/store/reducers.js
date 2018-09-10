const initialState = {
	loading: false,
	searchValue: '',
	weather: null
};

export default (state = initialState, action) => {
	console.log(action)
	if (action.type === 'SEARCH'){
		return {
			...state,
			searchValue: action.payload
		};
	} else if (action.type === 'GET_WEATHER'){
		return {
			...state,
			weather: action.payload
		};
	} else if (action.type === 'LOADING_ON'){
		return {
			...state,
			loading: true
		};
	} else if (action.type === 'LOADING_OFF'){
		return {
			...state,
			loading: false
		};
	}
	return state        
};