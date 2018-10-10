import { GET_TEST } from './types';

export const testAction = (value) => {
  return {
    type: GET_TEST,
    payload: value
  };
};