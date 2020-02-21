import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Square from '../components/square'
import Image from '../components/image'
import image1 from '../images/moi3.jpg';

const IndexPage = () => {
  const query = graphql`
  {
      innerpolishcms {
          squares {
              title,
              description,
              color,
              icon
          }
      }
  }
`;
  const data = useStaticQuery(query);
  const squares = data.innerpolishcms.squares;

  const showsquares = squares.map(element => (
    <Square title={element.title} description={element.description} color={element.color} image={element.image} />
  ))

  return (
    <Layout image={image1}>
      <SEO title="Home" />
      <div style={{ maxWidth: 960, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {showsquares}
      </div>
    </Layout>
  )
}

export default IndexPage
