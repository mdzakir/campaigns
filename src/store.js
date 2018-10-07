import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

/* const initialState = {};
const middleware = [thunk]; */

const logger = createLogger({
  collapsed: true,
  diff: true
});

const  configureStore = function (initialState) {
  return createStore(
      rootReducer, 
      initialState, 
      composeWithDevTools(
          /* logger must be the last middleware in chain to log actions */
          applyMiddleware(thunk, logger)  
      )
  );
}

export default configureStore;