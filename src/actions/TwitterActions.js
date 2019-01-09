import {ADD_COMMENT, ADD_COMMENT_COMMENT, ADD_LIKE, ADD_POST, DELETE_OBJECT} from "./Types";

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

export const deleteObject = payload => {
    return {type: DELETE_OBJECT, payload}
}