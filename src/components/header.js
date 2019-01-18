import React from 'react'
import {Link} from 'gatsby'
import './layout.css'

const Header = (props) => (
  <div className="nav">
    <h1>RICK AND MORTY CHARACTERS</h1>
    <Link to="/Characters" ><button>Characters</button></Link>
    <Link
    state={{
        dogs:props.dogs
    }}
    to="/Dogs" > <button>Dogs</button></Link>
  </div>
)
export default Header