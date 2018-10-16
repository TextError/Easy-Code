import axios from 'axios';

import { GET_REGISTER, GET_ERRORS } from './types';

//Register User
export const registerUser  = userData => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => dispatch({
      type: GET_REGISTER,
      payload: userData
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};