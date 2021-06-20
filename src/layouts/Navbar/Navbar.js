import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignedId from '../Navbar/SignedIn'
import SignedOut from '../Navbar/SignedOut'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const handleSignIn = () => setIsAuthenticated(true)

  const handleSignOut = () => setIsAuthenticated(false)

  return (
    <>

      <nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          HRMS
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {
          isAuthenticated ? <SignedId signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
        }
      </nav>
    </>
  );
}

export default Navbar;
