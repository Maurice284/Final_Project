import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";

const HomePage = ({ user, onClickLogin, setDealDetails, setShowModal }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDeals = async (query) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?title=${query}`
      );
      const data = await response.json();
      setIsLoading(false);
      setGames(data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching deals:", error);
    }
  };

  const dealLookUp = async (dealID) => {
    console.log("dealLookUp called with dealID:", dealID);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
      );
      const data = await response.json();
      console.log("API response data:", data);
      setDealDetails(data); // ✅ store data
      setShowModal(true); // ✅ open modal
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching specific deal", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Game Deals</h1>
      {user ? (
        <p>
          Hello, {user.email}! Check your <Link to="/profile">Profile</Link>.
        </p>
      ) : (
        <p>
          Please <button onClick={onClickLogin}>log in</button> or{" "}
          <Link to="/signup">sign up</Link> to get personalized deals.
        </p>
      )}

      <Header onSearch={fetchDeals} />
      <main className="results-section">
        {isLoading ? (
          <Preloader />
        ) : games.length === 0 ? (
          <p className="no-results-text">No results yet. Try searching!</p>
        ) : (
          <ul className="game-grid">
            {games.map((game) => (
              <li
                key={game.dealID}
                className="game-card"
                onClick={() => {
                  dealLookUp(game.dealID);
                }}
              >
                <img src={game.thumb} alt={game.title} className="game-thumb" />
                <h2 className="game-title">{game.title}</h2>
                <p className="game-price">
                  <span className="sale-price">${game.salePrice}</span>{" "}
                  <del className="normal-price">${game.normalPrice}</del>
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default HomePage;
