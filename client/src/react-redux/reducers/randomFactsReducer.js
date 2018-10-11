import { GET_RANDOMFACTS } from '../actions/types';

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOMFACTS:
      return {
        ...state,
        posts: action.payload
      }
      break;
  
    default:
      break;
  }
}