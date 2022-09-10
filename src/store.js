import { createStore } from "redux";
import reducers  from "./reducers/rootreducer";

const redux = require('redux');

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const store = createStore( reducers,applyMiddleware(thunkMiddleware) );






export default store;