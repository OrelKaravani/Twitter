import React, {Component} from "react";
import {connect} from "react-redux";
import Comment from "./Comment";

const mapStateToProps = state => {
    return {comments: state.comments}
};

class CommentsToShow extends Component{


    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.comments.map( comment => {
                            if (this.props.commentsId.includes(comment.id))
                                return (<Comment key={comment.id} comment={comment} />)
                            else
                                return null;

                        })
                    }
                </ul>
            </div>
        )
    }
}

const CommentsLists = connect(mapStateToProps)(CommentsToShow);

export default CommentsLists;