import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducers from './reducers/covidReducer';

const reducer = combineReducers({
  covidReducers,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default configureStore;
