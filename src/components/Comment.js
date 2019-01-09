import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import "./Comment.css"
import TwitterFooter from "./CardFooter";

class Comment extends Component {

    renderCommentOfComment() {
        if (this.props.comment.comment)
            return (
                <ul>
                    <Card>
                        <CardContent>
                            <Typography>
                                {this.props.comment.comment}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <TwitterFooter id={this.props.comment.id} likes={this.props.comment.likes}
                                           isPost={false} isSubComment/>
                        </CardActions>
                    </Card>
                </ul>
            )
    }


    render() {
        return (
            <div className="commentContainer d-flex">
                <Card>

                    <CardContent>
                        <Typography>
                            {this.props.comment.text}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <TwitterFooter id={this.props.comment.id} likes={this.props.comment.likes}
                                       isPost={false} isSubComment={false}/>
                    </CardActions>

                    {/*Comment of comment*/}
                    {this.renderCommentOfComment()}
                </Card>
            </div>
        )
    }
}

export default Comment;