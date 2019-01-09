import uuidv1 from "uuid";
import {ADD_COMMENT, ADD_COMMENT_COMMENT, ADD_LIKE, ADD_POST, DELETE_OBJECT} from "../actions/Types";
import comments from "./miniCommentReducer";
import posts from "./miniPostReducer";

const initialState = {
    posts: [],
    comments: []
};

function twitterReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return {
                posts: posts(state, action),
                comments: state.comments
            };

        case ADD_COMMENT:
            action.payload.commentId = uuidv1();
            return {
                posts: posts(state, action),
                comments: comments(state, action)
            };

        case ADD_LIKE:
            return {
                posts: posts(state, action),
                comments: comments(state, action)
            };

        case ADD_COMMENT_COMMENT:
            return {
                posts: state.posts,
                comments: comments(state, action)
            };

        case DELETE_OBJECT:
            return {
                comments: comments(state, action),
                posts: posts(state, action)

            }

        default:
            return state;
    }
}

export default twitterReducer;