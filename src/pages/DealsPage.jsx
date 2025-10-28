import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import Footer from "../components/Footer/Footer";

const DealsPage = ({ fetchDeals, isLoading, games, dealLookUp, page }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header onSearch={fetchDeals} page={page} />
      <main className="results-section">
        {isLoading ? (
          <Preloader />
        ) : games.length === 0 ? (
          <p className="results-section__no-results-text">
            No results yet. Try searching!
          </p>
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
                      ${game.salePrice}
                    </span>{" "}
                    <del className="game-card__normal-price">
                      ${game.normalPrice}
                    </del>
                  </p>
                  <p>store: {game.storeName}</p>
                  {/* <p>dealRating: {game.dealRating}</p>
                  <p>Savings: {game.savings}</p> */}
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
