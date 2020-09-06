import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;

    const postStyle={
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h3>Id: {id}</h3>
            <h5>Title: {title}</h5>
            <Link to={`/post/${id}`}  style={{textDecoration:'none'}}><Button variant="contained" color="Secondary">See More</Button></Link>
        </div>
    );
};

export default Post;