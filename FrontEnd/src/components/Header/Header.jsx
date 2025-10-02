import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import BackButton from "../BackButton/BackButton";

const Header = ({ onSearch, page }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      onSearch(trimmed);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="header">
      {page === "deals" ? <BackButton /> : ""}
      <h1 className="logo-text">🎮 Game Deal Finder</h1>

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
