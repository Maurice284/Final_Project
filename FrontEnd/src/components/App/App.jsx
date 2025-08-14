import { useState, useEffect } from "react";

import Modal from "../Modal/Modal.jsx";
import "./App.css";
import Header from "../Header/Header.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import AuthModal from "../AuthModal/AuthModal.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import ProfilePage from "../../pages/ProfilePage";
import { login, saveGame } from "../../utils/api.js";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [dealDetails, setDealDetails] = useState(null); // ⬅ stores detailed deal info
  const [showModal, setShowModal] = useState(false); // ⬅ controls modal

  /**
   * todo: use setDealDetails after the fetch request
   *  pass dealDetails to the modal
   *  add a state variable to open the modal, like previous projects
   *  show the dealDetails in the modal using whatever HTML tags
   */

  // ✅ New Auth-related state
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

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

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              user={user}
              onClickLogin={() => setShowLogin(true)}
              setDealDetails={setDealDetails}
              setShowModal={setShowModal}
            />
          }
        />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>

      {showModal && dealDetails && (
        <Modal
          details={dealDetails}
          onClose={() => setShowModal(false)}
          saveGame={handleSaveGame}
        />
      )}

      {/* Auth modals */}
      {showSignup && (
        <AuthModal
          type="signup"
          onClose={() => setShowSignup(false)}
          onSuccess={(data) => {
            setUser(data.user); // ⬅ Update user state after backend response
            setShowSignup(false);
          }}
        />
      )}

      {showLogin && (
        <AuthModal
          type="login"
          onClose={() => setShowLogin(false)}
          onSuccess={(data) => {
            setUser(data.user);
            setShowLogin(false);
          }}
          onLoginSubmit={handleLoginSubmit}
        />
      )}
    </div>
  );
};

export default App;
