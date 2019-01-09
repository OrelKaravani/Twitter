import React, {Component} from "react";

import ThumbUp from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/es/Button/Button";
import Comment from "@material-ui/icons/Comment";
import Delete from "@material-ui/icons/Delete";
import Input from "@material-ui/core/es/Input/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

import {connect} from "react-redux";
import {addComment, addCommentToComment, addLike, deleteObject} from "../actions/TwitterActions";
import {COMMENT, COMMENT_OF_COMMENT, POST} from "../actions/Types";

const likeBtnStyle = {
    marginRight: '10px'
};

function mapDispatchToProps(dispatch) {
    return {
        addComment: (postId, text) => dispatch(addComment({postId: postId, text: text})),
        addLike: objectId => dispatch(addLike(objectId)),
        addCommentToComment: (commentId, text) => dispatch(addCommentToComment({commentId: commentId, text: text})),
        deleteObject: (objectId, type) => dispatch(deleteObject({objectId: objectId, type: type}))
    }
}

class CardFooter extends Component {

    constructor(props) {
        super(props);

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleAddNewComment = this.handleAddNewComment.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDeleteObject = this.handleDeleteObject.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);

        this.state = {
            newComment: false,
            newCommentText: ""
        }
    }

    handleChangeText(event) {
        this.setState({newCommentText: event.target.value});
    }

    handleAddComment() {
        if (this.state.newCommentText !== "") {
            this.setState({newComment: false});
            this.props.isPost ? this.props.addComment(this.props.id, this.state.newCommentText) : this.props.addCommentToComment(this.props.id, this.state.newCommentText);
        }
    }

    handleAddNewComment() {
        this.setState({newComment: !this.state.newComment});
    }

    handleLike() {
        this.props.addLike(this.props.id);
    }

    handleDeleteObject() {
        const type = this.props.isPost ? POST : this.props.isSubComment ? COMMENT_OF_COMMENT : COMMENT;
        this.props.deleteObject(this.props.id, type);
    }

    renderNewComment() {

        if (this.state.newComment)
            return (
                <div>
                    <Input id="newCommentText" type="text" placeholder="Comment..." onChange={this.handleChangeText}/>
                    <Fab color="primary" size="small">
                        <AddIcon onClick={this.handleAddComment}/>
                    </Fab>
                </div>
            )
    }

    renderCommentButton() {
        if (!this.props.isSubComment) {
            return (
                <Button onClick={this.handleAddNewComment}>
                    <Comment/>
                </Button>
            )
        }
    }

    renderLikeButton() {
        if (!this.props.isSubComment)
            return (
                <Button onClick={this.handleLike}>
                    <span style={likeBtnStyle}> {this.props.likes}</span>
                    <ThumbUp/>
                </Button>
            )
    }

    render() {

        return (
            <div>
                <div>

                    {this.renderLikeButton()}

                    {this.renderCommentButton()}

                    <Button onClick={this.handleDeleteObject}>
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