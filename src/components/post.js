import React from 'react';

const Post = (props) => {
    console.log(props)
    return (
        <div key={props.title}>
            <h3>{props.title}</h3>
            <h5>{props.language}</h5>
            <iframe type="text/html"
                width="640"
                height="385"
                src="http://www.youtube.com/embed/D6Wi3SmmnAE"
                frameborder="0">
            </iframe>
        </div>
    )
}

export default Post;