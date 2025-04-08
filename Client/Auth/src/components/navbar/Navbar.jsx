import React from 'react';
import { Link } from 'react-router-dom';  // Why don't we import { Links} instead of {Link}


export default function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
        <nav>
            <Link to='/' > Home </Link>
            <Link to='/register' > Register </Link>
            <Link to='/login' > Login </Link>
        </nav>
      
    </div>
  );
}
