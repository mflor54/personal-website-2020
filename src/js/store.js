import {
    createStore,
    compose,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxLogger from 'redux-logger';
import window from 'global/window';
// import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const inDev = (process.env.NODE_ENV == 'development');

const middleware = [
    promise,
    thunk,
    ...(inDev ? [reduxLogger] : [])
];

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        // routerMiddleware(history)
        ...middleware
    ))
);