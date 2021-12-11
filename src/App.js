import React, { useState, useEffect } from "react";
import TopNav from "./home/Navbar";
import "./App.css";
import Auth from "./auth/auth";
import Showcase from "./Showcase";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ChoreIndex from "./chores/ChoreIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  // const protectedViews = () => {
  //   return sessionToken === localStorage.getItem("token") ? (
  //     <ChoreIndex token={sessionToken} />
  //   ) : (
  //     <Auth updateToken={updateToken} />
  //   );
  // };

  return (
    <>
      <Router>
        <div>
          <TopNav clickLogout={clearToken}></TopNav>
          <Routes>
            <Route path="/" element={<Showcase updateToken={updateToken} />} />
            <Route
              path="/signup"
              element={<Signup updateToken={updateToken} />}
            />
            <Route
              path="/login"
              element={<Login updateToken={updateToken} />}
            />
            <Route
              path="/choreindex"
              element={
                <ChoreIndex
                  updateToken={updateToken}
                  sessionToken={sessionToken}
                />
              }
            />
            

            {/* {protectedViews()} */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
