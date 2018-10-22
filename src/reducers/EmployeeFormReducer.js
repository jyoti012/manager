import {
    EMPLOYEE_UPDATE
  } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
			case EMPLOYEE_UPDATE:
			//action.payload === { prop: 'name', value: 'Jane' } 
			// [action.payload.prop] is not an array , but is called key interpolation , to have dynamic value instead of hard coding a particular value, ES6 syntax
    		return { ...state, [action.payload.prop]: action.payload.value  }
    	default:
    		return state;
    }
  }