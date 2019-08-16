import React from "react"
import { graphql } from "gatsby"

import Header from '../components/Header'

export default ({ data }) => {

  var nodos = data.allMarkdownRemark.edges
  var items = nodos.map( obj =>  {
                     return <div key={obj.node.id} style={  {border: "1px solid black"}} >
                               <h2> {obj.node.frontmatter.title} </h2>
                               <h5> {obj.node.excerpt} </h5>
                               <p>  {obj.node.frontmatter.date} </p> 
                            </div>
                      }
              )
  return (
      <div>
        <Header textHeader="MarkDown"/>
        <h1>Consuming data from markDown files throught GraphQl</h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {items}
      </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
  }
`