import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Auth from '../utils/auth';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className='navbar usernameText'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {Auth.loggedIn() ? (
            <p style={{ color: "white" }}>Welcome {Auth.getProfile().data.username}!</p>
          ) : (
            <p style={{ color: "white" }}>Welcome to Dev Wiki!</p>
          )}

        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}


            <li className="nav-text">
              {Auth.loggedIn() ? (
                <Link to="/">
                  <AiIcons.AiOutlineLogout />
                  <span onClick = {logout}>Logout</span>
                </Link>
              ) : (
                <Link to="/login">
                <AiIcons.AiOutlineLogin/>
                <span>Login</span>
                </Link>
              )}

            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
