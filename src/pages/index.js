import React from "react"

//import '../styles/global.css'

import Header from "../components/Header";
import Container from '../components/container'

export default () =>
  <div>
    <Header textHeader='Index' />

    <Container>
      <h1 >
        Hello Gatsby
     </h1>

      <p> How you doing</p>

      <img src="https://source.unsplash.com/random/400x200" alt="" />

    </Container>

  </div>
