import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducers/user_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(userReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;