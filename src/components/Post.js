import React, {Component} from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import TwitterFooter from "./CardFooter";

class Post extends Component {

    render (){
        return (
            <div className="p-2">
                <Card >
                    <CardContent>
                        <Typography color="textPrimary" >
                            {this.props.post.text}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <TwitterFooter id={this.props.post.id} />

                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Post;

