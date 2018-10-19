import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;
