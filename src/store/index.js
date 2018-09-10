import { createStore } from "redux";
import reducer from "./reducers.js";

const store = createStore(reducer); 

store.subscribe(() => {
	console.log('subscribe', store.getState());
});

// store.dispatch({
// 	type: 'SEARCH',
// 	payload: 'Ivano-Frankivsk'
// });

export default store;