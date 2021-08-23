import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Slide from './components/Slide';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Login from './components/Login';

export default function App() {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ user, setUser ] = useState({name: '', pass: ''});

  useEffect(() => {
    const footer = document.querySelector('.footer');
    let totalHeight = window.getComputedStyle(document.querySelector('.App')).height;
    totalHeight = +totalHeight.replace('px', '');

    if (totalHeight < window.innerHeight) {
      footer.style.position = 'fixed';
    } else {
      footer.style.position = 'static';
    }
  });

  return (
    <div className="App">
      <Header setShowLogin={setShowLogin} user={user} />
      <main className="main">
        <Slide />
        <Projects />
      </main>
      <Footer />
      { showLogin && <Login setShowLogin={setShowLogin} userData={{user, setUser}} /> }
    </div>
  );
}
