import { EMAIL_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: '' }; 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }; // Create new object and update the values of state, so redux understands that there is an update in the value
		default:
			return state;
	} 
}