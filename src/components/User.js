import React from 'react'
import userStyle from './user.module.css'


function User(props){
  return(
  <div className={userStyle.user}>
    <img src={props.avatar} className={userStyle.avatar} alt=""/>
    <div className={userStyle.description}>
      <h2 className={userStyle.username}>{props.username}</h2>
      <p className={userStyle.exerpt}>{props.exerpt}</p>
    </div> 
  </div>

  )
}

export default User