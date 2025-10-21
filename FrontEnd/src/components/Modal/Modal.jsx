import { useState } from "react";
import "./Modal.css";

// Receives 'details' (game info) and 'onClose' (function to close the modal)
const Modal = ({ details, onClose, saveGame }) => {
  const [isSaved, setIsSaved] = useState(null);
  // Defensive check: don't render anything if 'details' is missing

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  if (!details || !details.gameInfo) return null;

  // Destructure the needed data from 'details'
  const { gameInfo, cheapestPrice } = details;

  return (
    // Outer backdrop that closes modal when clicked
    <div className="modal" onClick={onClose}>
      {/* Inner modal content — stop click from closing it */}
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        {/* Game information */}
        <p>
          <h2 className="modal__title">{gameInfo.name}</h2>
        </p>

        {/* Game thumbnail */}
        <img
          src={gameInfo.thumb}
          alt={gameInfo.name}
          className="modal__image"
        />

        {/* Price details */}
        <div className="modal__footer">
          <div className="modal__footer-column">
            <p>
              <strong>Retail Price:</strong> ${gameInfo.retailPrice}
            </p>
            {/* <p>
              <strong>Cheapest Ever:</strong> ${cheapestPrice.price}
            </p> */}
            <p>
              {" "}
              <strong>Sale Price:</strong> ${gameInfo.salePrice}
            </p>
          </div>

          {/* Link to live deal */}
          {/* <a
            href={`https://www.cheapshark.com/redirect?dealID=${details.dealID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="deal__link"
          >
            🔗 View Live Deal
          </a> */}
        </div>
        {/* <button onClick={handleSaveClick}>
          {isSaved ? "Saved!" : "Save Game"}
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
