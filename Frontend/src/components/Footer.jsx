import React from 'react';
import './Footer.css'; 
import logo from "../assets/dumb/Logo.png"
import facebook from "../assets/dumb/facebook.png"
import instagram from "../assets/dumb/instagram.png"
import tiktok from "../assets/dumb/tik-tok.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="/help">Pusat Bantuan</a>
        <span>|</span>
        <a href="/about">Tentang Kami</a>
        <span>|</span>
        <a href="/privacy">Kebijakan Privasi</a>
        <span>|</span>
        <a href="/terms">Syarat dan Ketentuan Umum</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="TikTok" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
