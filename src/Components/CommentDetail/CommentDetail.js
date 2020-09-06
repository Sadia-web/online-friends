import React from 'react';
import image from '../image/fake.png';

const CommentDetail = (props) => {
    const {id, name, email, body} = props.comment;
    const commentStyle={
        margin:'20px',
        padding: '20px'
    }
    return (
        <div style={commentStyle}>
            <p><b>Id:</b> {id}</p>
            <p><b>Name:</b> {name} <img src={image} alt="" style ={{width:'80px', height: '80px',float:'right'}}/></p>           
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default CommentDetail;