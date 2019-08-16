import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header  from '../components/Header'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Header textHeader="md2"/>
      <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`