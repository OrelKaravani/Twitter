import {ADD_LIKE_POST, ADD_POST, DELETE_POST} from "../actions/Types";
import uuidv1 from "uuid"

const initialState = {
    posts: []
}

function postReducer (state = initialState, action){
    switch (action.type) {
        case ADD_POST:
            return {"posts": state.posts.concat({text: action.payload, id:uuidv1(), likes:0, comments:[]})};

        case DELETE_POST:
            return {"posts": state.posts.filter(post => {return post.id !== action.payload})};

        case ADD_LIKE_POST:
            return {"posts": state.posts.map((post) => {
                if (post.id === action.payload)
                    return {
                        ...post,
                        likes: post.likes+1
                    };
                else
                    return post;
                })};


        default:
            return state;
    }
}

export default postReducer;