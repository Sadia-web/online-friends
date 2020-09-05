import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Post = (props) => {
    const {userId,title, id} = props.post;

    const postStyle={
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h5>Id: {id}</h5>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`} style={{textDecoration:'none'}}><Button variant="contained" color="Secondary">See Detail</Button></Link>
        </div>
    );
};

export default Post;