import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Post from './post.js';

const Posts = () => {
    const data = useStaticQuery(graphql`
        {
            innerpolishcms {
                videos {
                    title,
                    language,
                    videoid
                }
            }
        }
    `)
    const posts = data.innerpolishcms.videos;
    const showposts = posts.map(element => (
        <Post title={element.title} language={element.language} videoid={element.videoid} />
    ))

    return (
        <div style={{ maxWidth: 960, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {showposts}
        </div>

    )
}

export default Posts;