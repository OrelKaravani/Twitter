import { createStore} from "redux";
import postReducer from "../reducers/PostReducer";

const store =  createStore(postReducer);

export default store;