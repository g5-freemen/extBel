import React, {useState} from 'react';
import Search from './Search';
import logo from '../img/logo.svg';

export default function Header({setShowLogin, user}) {
  const [showBMenu, setShowBMenu] = useState('header-nav');
  const [showSearch, setShowSearch] = useState(false);
  const [searchStr, setSearchStr] = useState('');

  function toggleBMenu() {
    if (showBMenu.includes('bmenu')) {
      setShowBMenu('header-nav');
    } else {
      setShowBMenu('header-nav header-bmenu');
    }
  }

  function selectSearch(ev) {
    const bg = window.getComputedStyle(ev.target).background;
    if (bg.includes('black')) {
      setShowSearch(prev => !prev);
     } else {
       alert(`Search for "${searchStr}"`);
     }
  }

  return (
    <header className="header">
      <button className="header-bmbtn" onClick={toggleBMenu} />
      <img src={logo} alt="extBel logo" />
      <nav className={showBMenu} >
        <div className="bmenu-logo" />
        <button className="bmenu-close" onClick={toggleBMenu}>
          ✖
        </button>
        <a href="#Main">Main</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Contacts">Contacts</a>
        <a href="#About">About Us</a>
      </nav>
      <div className='header-search' >
        <input type="text" onChange={(ev) => setSearchStr(ev.target.value)} />
        <button onClick={selectSearch} />
      </div>
      {user.name 
        ? user.name 
        : <button className="header-login_btn" onClick={() => setShowLogin(prev => !prev)}>
            Log in
          </button>
      }
      {showSearch && <Search setShowSearch={setShowSearch} /> }
    </header>
  );
}
