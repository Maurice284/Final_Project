import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const DealsPage = ({ fetchDeals, isLoading, games, dealLookUp, page }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header onSearch={fetchDeals} page={page} />
      <main className="results-section">
        {isLoading ? (
          <Preloader />
        ) : games.length === 0 ? (
          <p className="no-results-text">No results yet. Try searching!</p>
        ) : (
          <div>
            <ul className="game-grid">
              {games.map((game) => (
                <li
                  key={game.dealID}
                  className="game-card"
                  onClick={() => {
                    dealLookUp(game.dealID);
                  }}
                >
                  <img
                    src={game.thumb}
                    alt={game.title}
                    className="game-thumb"
                  />
                  <h2 className="game-title">{game.title}</h2>
                  <p className="game-price">
                    <span className="sale-price">${game.salePrice}</span>{" "}
                    <del className="normal-price">${game.normalPrice}</del>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
};

export default DealsPage;
