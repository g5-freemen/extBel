import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#About">About Us</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Gallery">Gallery</a>
        <a href="#Contacts">Contacts</a>
      </nav>
      <div className="footer-icons">
        <a href="#WhatsApp" className="whatsapp-link"> </a>
        <a href="#Slack" className="slack-link"> </a>
        <a href="#Instagram" className="instagram-link"> </a>
      </div>
    </footer>
  );
}
