import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCiUUGX5yyP5XAkgQQAMnrn6kxAjIWuxfM',
			authDomain: 'manager-37974.firebaseapp.com',
			databaseURL: 'https://manager-37974.firebaseio.com',
			projectId: 'manager-37974',
			storageBucket: 'manager-37974.appspot.com',
			messagingSenderId: '43361598201'
		};
		firebase.initializeApp(config);
	}

  render() {
		// {} => array to pass any initial State
		// applyMiddleware(ReduxThunk) => store enhancers : adds additional functionality to the store
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
