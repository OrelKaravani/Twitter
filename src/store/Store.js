import {combineReducers, createStore} from "redux";
import postReducer from "../reducers/PostReducer";
import commentReducer from "../reducers/CommentReducer";

const rootReducer = combineReducers({postReducer, commentReducer});
const store =  createStore(rootReducer);

export default store;