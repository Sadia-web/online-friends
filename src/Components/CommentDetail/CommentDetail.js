import React from 'react';

const CommentDetail = (props) => {
    const {id, name, email, body} = props.comment;
    return (
        <div>
            <p><b>Commented Name:</b> {name}</p>
            <p><b>Id:</b> {id}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default CommentDetail;