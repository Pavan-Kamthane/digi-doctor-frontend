import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const { currentUser, logOut } = useAuth();
  const Navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='navbar'>
        <Link className='logo' to="/">
          👩‍⚕️Digi-<span>Doctor</span>
        </Link>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={() => {
                logOut();
                Navigate('/');
              }}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
