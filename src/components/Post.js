import React, {Component} from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import TwitterFooter from "./CardFooter";
import CommentsLists from "./CommentsLists";

class Post extends Component {

    render() {
        return (
            <div className="p-2">
                <Card>
                    <CardContent>
                        <Typography color="textPrimary">
                            {this.props.post.text}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <TwitterFooter id={this.props.post.id} likes={this.props.post.likes}
                                       isPost isSubComment={false}/>

                    </CardActions>
                    <CommentsLists commentsId={this.props.post.comments}/>
                </Card>
            </div>
        )
    }
}

export default Post;

