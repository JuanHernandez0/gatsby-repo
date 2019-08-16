import React from 'react'

import Header from '../components/Header'
import Container from '../components/container'
import User from '../components/User'



 function MyComp(){
   return(
      
      <div>
         <Header textHeader='About' />
       
    <Container>
        <h1 style={{color: 'teal'}}>
           Hello from My Comp 2
        </h1>

      <User username="gatoSaurio"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            exerpt="soy un gato dinosaurio"
      />
    </Container>
      </div>
    
   )
  
    
   
   
}



export default MyComp