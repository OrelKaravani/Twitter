import React from "react";
import {connect} from "react-redux";

import Post from "./Post"
import "./PostsToShow.css"

const mapStateToProps = state => {
    return {posts: state.posts}
}

const postsToShow = ({ posts }) => (
    <div className="postContainer d-flex">

        { posts.map( post => (
            <Post key={post.id} post={post}/>
        )) }

    </div>
);


const PostsList = connect(mapStateToProps)(postsToShow);

export default PostsList;