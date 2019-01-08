import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import "./Comment.css"
import TwitterFooter from "./CardFooter";


const Comment = ({comment}) => (

    <div className="commentContainer d-flex">
        <Card>

            <CardContent>
                <Typography>
                    {comment.text}
                </Typography>
            </CardContent>

            <CardActions>
                <TwitterFooter id={comment.id} likes={comment.likes}
                               commentAllowed/>
            </CardActions>
        </Card>
    </div>
);

export default Comment;