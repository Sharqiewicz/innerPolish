import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Post from './post.js';

const Posts = () => {
    const data = useStaticQuery(graphql`
        {
            innerpolish {
                movies {
                    title,
                        language,
                        link
                }
            }
        }
    `)

    const posts = data.innerpolish.movies;
    const showposts = posts.map(element => (
        <Post title={element.title} language={element.language} link={element.link} />
    ))

    return (
        <div>
            {showposts}
        </div>

    )
}

export default Posts;