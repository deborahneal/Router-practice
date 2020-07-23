import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/about'>About Me</Link>
          <div>This is where I practice</div>
        </div>
    )
}


export default Navbar;