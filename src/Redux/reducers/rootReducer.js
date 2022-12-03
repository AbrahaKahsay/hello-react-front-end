import { combineReducers } from 'redux';
import greetingReducer from './Greeting/greeting';

const rootReducer = combineReducers({
  Greeting: greetingReducer,
});

export default rootReducer;
