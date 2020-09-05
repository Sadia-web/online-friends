import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

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
        <div>
            <h1>This is post details of: {post.id}</h1>
            <p>User Id: {post.userId}</p>
            <h5>Post Title: {post.title}</h5>
            <h2>Post Body: {post.body}</h2>
            <hr/>
            <h1>These are comments</h1>
            <Comment postid={postId}></Comment>
        </div>
    );
};

export default PostDetail;