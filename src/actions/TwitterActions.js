import {ADD_COMMENT, ADD_COMMENT_COMMENT, ADD_LIKE, ADD_POST} from "./Types";

export const addPost = payload => {
    return {type: ADD_POST, payload}
};

export const addComment = payload => {
    return {type:ADD_COMMENT, payload}
};

export const addCommentToComment = payload => {
    return {type: ADD_COMMENT_COMMENT, payload};
};

export const addLike = payload => {
    return {type: ADD_LIKE, payload}
};