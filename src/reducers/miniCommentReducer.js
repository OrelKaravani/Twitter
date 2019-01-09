import {ADD_COMMENT, ADD_COMMENT_COMMENT, ADD_LIKE, COMMENT, DELETE_OBJECT, POST} from "../actions/Types";

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

        case DELETE_OBJECT:
            return deleteComments(state, action.payload.type, action.payload.objectId);

        default:
            return state.comments;
    }
};

const deleteComments = (state, type, objectId) => {
    switch (type) {
        case POST:
            const linkedComments = getLinkedCommentsToPost(state.posts, objectId);
            return state.comments.filter(comment => {
                return !linkedComments.includes(comment.id);
            });

        case COMMENT:
            return state.comments.filter(comment => {
               return comment.id !== objectId;
            });

        default:
            return state.comments;
    }
};

const getLinkedCommentsToPost = (posts, postId) => {

    const post =  posts.find(post => {
        return post.id === postId
    });

    return post.comments;
}

export default comments;