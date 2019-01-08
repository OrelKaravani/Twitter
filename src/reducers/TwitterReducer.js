import uuidv1 from "uuid";
import {ADD_COMMENT, ADD_LIKE, ADD_POST} from "../actions/Types";

const initialState = {
    posts: [],
    comments: []
};

/** logic action on posts **/
const posts = (state, action) =>{
  switch (action.type) {
      case ADD_POST:
          return [...state.posts, {id: uuidv1(), text: action.payload, likes:0, comments: []}];

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

/** logic action on comments **/
const comments = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state.comments, {id:action.payload.commentId, text: action.payload.text, likes:0, comment: null}];

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

        default:
            return [...state.comments];
    }
};

function twitterReducer (state=initialState, action){

    switch(action.type){
        case ADD_POST:
            return {
                posts: posts(state,action),
                comments: state.comments
            };

        case ADD_COMMENT:
            action.payload.commentId = uuidv1();
            return {
                posts: posts(state, action),
                comments: comments(state, action)
            };

        case ADD_LIKE:
            return{
                posts: posts(state, action),
                comments: comments(state, action)
            };

        default:
            return state;
    }
}

export default twitterReducer;