import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Posts from '../components/posts'

const SecondPage = () => (
  <Layout>
    <SEO title="Videos" />
    <h1>My videos</h1>
    <Posts />
    <Link to="/" style={{ background: 'red', color: 'white', padding: 20, borderRadius: 15, fontWeight: 'bold' }}> &larr; Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
