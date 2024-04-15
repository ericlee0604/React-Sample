import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers";
import {thunk} from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
// const store = createStore(rootReducer);

export default store;
