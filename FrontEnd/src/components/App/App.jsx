import { useState, useEffect, useContext } from "react";

import Modal from "../Modal/Modal.jsx";
import "./App.css";
import Header from "../Header/Header.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import AuthModal from "../AuthModal/AuthModal.jsx";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import DealsPage from "../../pages/DealsPage";
import api from "../../utils/api.js";
//import { login, saveGame } from "../../utils/api.js";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [dealDetails, setDealDetails] = useState(null); // ⬅ stores detailed deal info
  const [showModal, setShowModal] = useState(false); // ⬅ controls modal
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [initialGames, setInitialGames] = useState([]);
  const [page, setpage] = useState("home");

  /**
   * todo: use setDealDetails after the fetch request
   *  pass dealDetails to the modal
   *  add a state variable to open the modal, like previous projects
   *  show the dealDetails in the modal using whatever HTML tags
   */

  const fetchDeals = async (query) => {
    try {
      setIsLoading(true);
      api.getDeals(query).then((data) => {
        console.log(data);
        setGames(data);
      });
    } catch (error) {
      console.error("Error fetching deals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const dealLookUp = async (dealID) => {
    console.log("dealLookUp called with dealID:", dealID);
    try {
      setIsLoading(true);
      api.getDealDetails(dealID).then((data) => {
        console.log("API response data:", data);
        setDealDetails(data);
        setShowModal(true);
      });
    } catch (error) {
      console.error("Error fetching specific deal", error);
    } finally {
      setIsLoading(false);
      setpage("deals");
    }
  };

  function handleLoginSubmit(email, password) {
    login(email, password).then((data) => {
      console.log(data);
      setUser(data);
      // do stuff with state
    });
  }

  function handleSaveGame() {
    saveGame(details).then(() => {
      // when there's a backend, update our list of saved games
    });
  }

  useEffect(() => {
    api
      .getInitalGames()
      .then((items) => {
        setInitialGames(items.reverse());
        console.log(items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoading={isLoading} games={initialGames} page={page} />
          }
        />
        <Route
          path="/deals"
          element={
            <DealsPage
              isLoading={isLoading}
              fetchDeals={fetchDeals}
              games={games}
              dealLookUp={dealLookUp}
              page={page}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
