import React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
function Footer(){

  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            miFooter
          }
        }
      }
    `
  )

  return(
    <div style={ {border: "1px solid red"}}>
      {data.site.siteMetadata.miFooter}
    </div>
  )
}
export default Footer