import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

import image1 from '../images/moi1.jpg'

const SecondPage = () => (
  <Layout image={image1}>
    <SEO title="About Me" />
    <h1>About me</h1>

    <Image />

    <Link to="/" style={{ background: 'red', color: 'white', padding: 20, borderRadius: 15, fontWeight: 'bold' }}> &larr; Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
