import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native'
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({email, password});
	}

	renderError() {
		if(this.props.error) {
			return <View style={{ backgrounColor: 'white' }}>
				<Text style={styles.errorStyle}>{this.props.error}</Text>
			</View>
		}
	}

  render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="john@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label="Password"
						placeholder="qwerty"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				
				{this.renderError()}

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser 
}) (LoginForm);
