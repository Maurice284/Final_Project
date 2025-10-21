import React from "react";
import "./GameList.css";

const GameList = ({ games }) => {
  if (games.length === 0) {
    return (
      <p className="results-section__no-results-text">
        No results yet. Try searching!
      </p>
    );
  }

  return (
    <div className="game-grid">
      {games.map((game) => (
        <div className="game-card" key={game.dealID}>
          <img
            src={game.thumb}
            alt={game.title}
            className="game-card__thumbnail"
          />
          <h3 className="game-card__title">{game.title}</h3>
          <p className="game-card__price">
            <span className="game-card__sale-price">${game.salePrice}</span>{" "}
            <del className="game-card__normal-price">${game.normalPrice}</del>
          </p>
          <a
            href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="deal-link"
          >
            View Deal
          </a>
        </div>
      ))}
    </div>
  );
};

export default GameList;
