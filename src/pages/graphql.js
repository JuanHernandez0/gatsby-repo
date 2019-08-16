import React from 'react'
import {graphql} from 'gatsby'

import Header from '../components/Header';
import Footer from '../components/footer';

function Prueba( {data} ){
  return(
    <div>
     <Header textHeader="GraphQl"/>

      <h1>Cosuming through graphql</h1>

      <h3>{data.site.siteMetadata.title}</h3>
      <h3>{data.site.siteMetadata.foo}</h3>


     <Footer/> 

    </div>
  )
}

export default Prueba;

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
        foo
      }
    }
  }
`