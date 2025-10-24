import { useState } from "react";

const AuthModal = ({
  type = "login",
  onLoginSubmit,
  onClose,
  onSuccess,
  isOpen,
}) => {
  const isSignup = type === "signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = isSignup ? "/register" : "/login";

    onLoginSubmit(email, password);

    // fetch(`http://localhost:5000${endpoint}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.user) {
    //       onSuccess(data); // ✅ update user state in App.jsx
    //     } else {
    //       setMessage(data.message || "Something went wrong.");
    //     }
    //   })
    //   .catch(() => setMessage("Server error."));
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button onClick={onClose}>X</button>
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
        {message && <p style={{ color: "red" }}>{message}</p>}

        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="modal__button-container">
            <button type="submit">{isSignup ? "Register" : "Login"}</button>{" "}
            <p className="modal__content">
              or{" "}
              <button className="modal__button-nav">
                {isSignup ? "Login" : "Register"}
              </button>{" "}
              to get personalized deals.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
