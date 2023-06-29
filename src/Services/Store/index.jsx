import { applyMiddleware, combineReducers, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import postsReducer from "./PostReducer";
import commentReducer from "./CommentReducer";
import userReducer from "./UserReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../Saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
  postsReducer,
  commentReducer,
  userReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);