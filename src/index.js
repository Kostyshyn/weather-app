import React from 'react';
import ReactDOM from 'react-dom';
// import 'bulma/css/bulma.css'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={ store }>
    	<App />
  	</Provider>, document.getElementById('root'));
registerServiceWorker();
