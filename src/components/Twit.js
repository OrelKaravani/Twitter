import React, { Component } from 'react';
import {connect} from "react-redux";

import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Typography from "@material-ui/core/es/Typography/Typography";
import Input from "@material-ui/core/es/Input/Input";
import Button from "@material-ui/core/es/Button/Button";

import "./Twit.css"

import {addPost} from "../actions/TwitterActions"

function mapDispatchToProps (dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    }
}

class TwitPost extends Component {

    constructor(){
        super();

        this.state = {
            post:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange (event) {
        this.setState({[event.target.id] :event.target.value});

    }

    handleClick (){
        if (this.state.post !=="")
            this.props.addPost(this.state.post)
    }

    render() {
        return (
            <div className="container d-flex">
                <div className="p-1">
                    <Card >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Post Your Mind
                            </Typography>

                            <Input id="post" placeholder="What's on your mind?"
                                   onChange={this.handleChange}/>

                        </CardContent>
                        <CardActions>
                            <Button color="primary" variant="contained" onClick={this.handleClick}>Post</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

const Twit = connect(null, mapDispatchToProps)(TwitPost);

export default  Twit;


