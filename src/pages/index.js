import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { FaSteam } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaSteam />
  </Layout>
)

export default IndexPage
