import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
