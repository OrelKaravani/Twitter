import uuidv1 from "uuid";
import {ADD_COMMENT, ADD_LIKE, ADD_POST} from "../actions/Types";

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
        default:
            return [...state.posts];

        case ADD_COMMENT:
            return state.posts.map(post => {
                if (post.id !== action.payload.postId)
                    return post;
                else
                    return {
                        ...post,
                        comments: post.comments.concat(action.payload.commentId)
                    }
            })
    }
};

export default posts;