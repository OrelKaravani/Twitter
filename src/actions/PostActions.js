import {ADD_LIKE_POST, ADD_POST, DELETE_POST} from "./Types";

export const addPost = payload => {
    return {type: ADD_POST, payload};
}

export const deletePost = payload => {
    return {type: DELETE_POST, payload};
}

export const addLikePost = payload => {
    return {type:ADD_LIKE_POST, payload};
}