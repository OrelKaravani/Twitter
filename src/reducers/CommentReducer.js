import {ADD_COMMENT, ADD_LIKE_COMMENT} from "../actions/Types";
import uuidv1 from "uuid";

const initialState = {
    comments: []
};

function commentReducer (state=initialState, action){
    switch (action.type) {

        case ADD_COMMENT:
            console.log("<< ADD_COMMENT >>");
            return state;

        case ADD_LIKE_COMMENT:
            console.log("<< ADD_LIKE_COMMENT >>");
            return state;

        default:
            return state;

    }
}

export default commentReducer;

