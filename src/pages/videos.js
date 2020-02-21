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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
