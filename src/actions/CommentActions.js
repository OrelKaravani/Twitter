import {ADD_COMMENT, ADD_LIKE_COMMENT} from "./Types";

export const addComment = payload =>{
    return {type:ADD_COMMENT, payload};
}

export const addLikeComment = payload => {
    return {type:ADD_LIKE_COMMENT, payload};
}