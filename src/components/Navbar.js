import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './Navbar.css'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            darkWave <i className="fas fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/challenges" className="nav-links" onClick={closeMobileMenu}>
                Challenges
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
<<<<<<< HEAD
            <li className="nav-item">
              <Link to="/auth" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
=======
>>>>>>> 969dfae (added 3 more challenges)
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
