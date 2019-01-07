import React , {Component} from "react"

import ThumbUp from "@material-ui/icons/ThumbUp"
import Button from "@material-ui/core/es/Button/Button";
import Comment from "@material-ui/icons/Comment"
import Delete from "@material-ui/icons/Delete";
import Input from "@material-ui/core/es/Input/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

import {addLikePost, deletePost} from "../actions/PostActions";
import {connect} from "react-redux";
import {addComment} from "../actions/CommentActions";

function mapDispatchToProps (dispatch){
    return {
        deletePostId: postId => dispatch(deletePost(postId)),
        addLike: postId => dispatch(addLikePost(postId)),
        addComment: postId => dispatch(addComment(postId))
    }
}

class CardFooter extends Component {

    constructor(props){
        super(props);

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleAddNewComment = this.handleAddNewComment.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);

        this.state = {
            newComment: false,
            newCommentText: ""
        }
    }

    handleAddComment(){
        this.setState({ newComment: false });
        this.props.addComment(this.props.id);
    }

    handleAddNewComment(){
        this.setState({ newComment: !this.state.newComment });
    }

    handleLike(){
        this.props.addLike(this.props.id);
    }

    handleDeletePost(){
        this.props.deletePostId(this.props.id);
    }

    renderNewComment(){

        if (this.props.commentAllowed && this.state.newComment)
            return (
                <div>
                    <Input id="newCommentText" type="text" placeholder="Comment..." />
                    <Fab color="primary" size="small">
                        <AddIcon onClick={this.handleAddComment}/>
                    </Fab>
                </div>
            )
    }


    render() {

        return (
            <div>
                <div>
                    <span> {this.props.likes}</span>
                    <Button onClick={this.handleLike}>
                        <ThumbUp />
                    </Button>

                    <Button onClick={this.handleAddNewComment}>
                        <Comment/>
                    </Button>

                    <Button onClick={this.handleDeletePost}>
                        <Delete/>
                    </Button>
                </div>

                {this.renderNewComment()}
            </div>


        )
    }
}

const TwitterFooter = connect(null, mapDispatchToProps)(CardFooter);

export default TwitterFooter;