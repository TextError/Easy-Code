import { GET_TEST } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEST:
      return {
        ...state,
        user: action.payload
      }
    
    default:
      return state;
  }
}