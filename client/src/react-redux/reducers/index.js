import { combineReducers } from 'redux';
// import testReducer from './testReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  // test: testReducer
  testRegister: registerReducer,
  errors: errorReducer
});