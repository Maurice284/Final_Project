import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import BackButton from "../BackButton/BackButton";

const Header = ({ onSearch, page }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      await onSearch(trimmed);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="header">
      {/* <video autoPlay loop muted className="header-video">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {page === "deals" ? <BackButton /> : ""}
      <div className="header__logo-text-container">
        <h1 className="header__logo-text">🎮 Game Deal Finder</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <Link to="/deals" onClick={handleSearch} className="search-button">
          Search
        </Link>
      </div>
    </header>
  );
};

export default Header;
