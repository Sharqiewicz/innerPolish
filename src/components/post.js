import React from 'react';

const Post = (props) => {
    console.log(props)
    const link = `http://www.youtube.com/embed/${props.videoid}`;
    return (
        <div key={props.title} style={{ width: 430 }}>
            <h3>{props.title}</h3>
            <h5>{props.language}</h5>
            <iframe type="text/html"
                width="100%"
                height="245"
                src={link}
                frameborder="0">
            </iframe>
        </div>
    )
}

export default Post;