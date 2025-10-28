import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Game Deal Finder. All rights reserved.</p>
      <p>Developed by Maurice M 2025</p>
    </footer>
  );
};

export default Footer;
