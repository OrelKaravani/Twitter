import uuidv1 from "uuid";
import {ADD_COMMENT, ADD_LIKE, ADD_POST, COMMENT, DELETE_OBJECT, POST} from "../actions/Types";

/** logic action on posts **/
const posts = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state.posts, {id: uuidv1(), text: action.payload, likes: 0, comments: []}];

        case ADD_LIKE:
            return state.posts.map(post => {
                if (post.id === action.payload)
                    return {
                        ...post,
                        likes: post.likes + 1
                    };
                else
                    return post;
            });

        case ADD_COMMENT:
            return state.posts.map(post => {
                if (post.id !== action.payload.postId)
                    return post;
                else
                    return {
                        ...post,
                        comments: post.comments.concat(action.payload.commentId)
                    }
            });

        case DELETE_OBJECT:
            return deletePosts(state, action.payload.type, action.payload.objectId);

        default:
            return state.posts;


    }
};

const deletePosts = (state, type, objectId) => {
    switch (type) {
        case POST:
            return state.posts.filter(post => {
                return post.id !== objectId;
            });

        case COMMENT:
            return state.posts.map(post => {
                if (post.comments.includes(objectId))
                    return {
                        ...post,
                        comments: post.comments.filter(id => {
                            return id !== objectId
                        })
                    };
                else
                    return post;
            });

        default:
            return state.posts;
    }
};

export default posts;