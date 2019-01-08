import {ADD_COMMENT, ADD_COMMENT_COMMENT, ADD_LIKE} from "../actions/Types";

/** logic action on comments **/
const comments = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state.comments, {
                id: action.payload.commentId,
                text: action.payload.text,
                likes: 0,
                comment: null
            }];

        case ADD_LIKE:
            return state.comments.map(comment => {
                if (comment.id === action.payload)
                    return {
                        ...comment,
                        likes: comment.likes + 1
                    };
                else
                    return comment;
            });

        case ADD_COMMENT_COMMENT:
            return state.comments.map(comment => {
                if (comment.id === action.payload.commentId)
                    return {
                        ...comment,
                        comment: action.payload.text
                    };
                else
                    return comment;
            });

        default:
            return [...state.comments];
    }
};

export default comments;