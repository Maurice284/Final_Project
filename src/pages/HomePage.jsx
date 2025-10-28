import React, { useState } from "react";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import "./pages.css";
import Footer from "../components/Footer/Footer";

const HomePage = ({ fetchDeals, isLoading, games, dealLookUp, page }) => {
  console.log(dealLookUp);
  return (
    <div className="page" style={{ padding: "20px" }}>
      <Header onSearch={fetchDeals} page={page} />
      <main className="results-section">
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <ul className="game-grid">
              {games.map((game) => (
                <li
                  key={`${game.gameID}-${game.dealID}`}
                  className="game-card"
                  onClick={() => {
                    dealLookUp(game.dealID);
                  }}
                >
                  <img
                    src={game.thumb}
                    alt={game.title}
                    className="game-card__thumbnail"
                  />
                  <h2 className="game-card__title">{game.title}</h2>
                  <p className="game-card__price">
                    <span className="game-card__sale-price">
                      {game.salePrice}
                    </span>{" "}
                    <del className="game-card__normal-price">
                      {game.normalPrice}
                    </del>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
