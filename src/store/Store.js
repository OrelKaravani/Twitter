import {createStore} from "redux";
import twitterReducer from "../reducers/TwitterReducer";

const store =  createStore(twitterReducer);

window.store = store;

export default store;