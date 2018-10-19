import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED 
} from '../actions/types';
const INITIAL_STATE = { 
	email: '',
	password: ''
}; 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }; // Create new object and update the values of state, so redux understands that there is an update in the value
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		default:
			return state;
	} 
}