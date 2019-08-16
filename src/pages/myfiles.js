import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'

function MyFiles({ data }) {

  let nodos = data.allFile.edges;
  let items = nodos.map(obj => <tr>
                                  <th>{obj.node.relativePath}</th>
                                  <th>{obj.node.extension}</th>
                               </tr>)

  return (
    <div>

      <Header textHeader="My Files"/>

      <table>

        <thead>
          <tr>
            <th>Path</th>
            <th>extension</th>
          </tr>
        </thead>
        <tr>

        </tr>
        <tbody>
          {items}
        </tbody>

      </table>



    </div>


  )
}
export default MyFiles

export const query = graphql`
  query{
    allFile{
      edges{
        node{
          relativePath
          extension
        }
      }
    }
  }
`