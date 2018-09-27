import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

// import root epic/reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string';

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
        queryString
    }
});

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const store = createStore(rootReducer,
    applyMiddleware(epicMiddleware),
    applyMiddleware(appRouterMiddleware));

export default store;