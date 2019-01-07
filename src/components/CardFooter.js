import React , {Component} from "react"

import ThumbUp from "@material-ui/icons/ThumbUp"
import Button from "@material-ui/core/es/Button/Button";
import Comment from "@material-ui/icons/Comment"
import Delete from "@material-ui/icons/Delete";

import {addLikePost, deletePost} from "../actions/PostActions";
import {connect} from "react-redux";

function mapDispatchToProps (dispatch){
    return {
        deletePostId: postId => dispatch(deletePost(postId)),
        addLike: postId => dispatch(addLikePost(postId))
    }
}

class CardFooter extends Component {

    constructor(props){
        super(props);

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    handleAddComment(){
        console.log("Comment was added");
    }

    handleLike(){
        this.props.addLike(this.props.id);
    }

    handleDeletePost(){
        this.props.deletePostId(this.props.id);
    }

    render() {
        return (
            <div>
                <span> {this.props.likes}</span>
                <Button onClick={this.handleLike}>
                    <ThumbUp />
                </Button>

                <Button onClick={this.handleAddComment}>
                    <Comment/>
                </Button>

                <Button onClick={this.handleDeletePost}>
                    <Delete/>
                </Button>
            </div>
        )
    }
}

const TwitterFooter = connect(null, mapDispatchToProps)(CardFooter);

export default TwitterFooter;