import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { Container, Box } from '@material-ui/core';
import './PostDetail.css';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))
    }, [])
    return (
        <Container>
            <Box className="post-style">
            <h2 className="total-post">Post details of ID: {post.id}</h2>
            <h5>User Id: {post.userId}</h5>
            <h5>Post Title: {post.title}</h5>
            <h5>Post Body: {post.body}</h5>
            </Box>
            <h2 className="total-post">These are comments</h2>
            <Comment id={postId}></Comment>
        </Container>
    );
};

export default PostDetail;