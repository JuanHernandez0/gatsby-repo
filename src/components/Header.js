import React from 'react'
import {Link} from 'gatsby'
import './Header.css'

function Header(props){
 return(
  <div id="header">
     <h1>{ props.textHeader } </h1>
     <Link className="link" to="/">Index    </Link>
     <Link className="link" to="/about">About</Link>
     <Link className="link" to="/contact">Contact</Link>
     <Link className="link" to="/pandas">Pandas</Link>
     <Link className="link" to="/graphql">Graphql</Link>
     <Link className="link" to="/myfiles">My Files</Link>
     <Link className="link" to="/seeMD">See MarkDowns</Link>
     <Link className="link" to="/miMarkDown">MarkDown Page</Link>
  </div>
 )
}

export default Header;