import React, { useState, useEffect } from "react";
import TopNav from "./home/Navbar";
import "./App.css";
import Showcase from "./Showcase";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ChoreIndex from "./chores/ChoreIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChoreCreate from "./chores/ChoreCreate";
import ChoreTable from "./chores/ChoreTable";
import HomePage from "./home/home";
import ContactPage from "./Contact/contact";
import Footer from "./Elements/footer"

function App() {
  const [sessionToken, setSessionToken] = useState("");

  

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

  

  return (
    
    <>
      <Router>
        <div>
          <TopNav sessionToken={sessionToken} clickLogout={clearToken}></TopNav>
          <Routes>
            <Route path="/" element={<Showcase sessionToken={sessionToken} updateToken={updateToken} />} />
            <Route
              path="/signup"
              element={<Signup sessionToken={sessionToken} updateToken={updateToken} />}
            />
            <Route
              path="/login"
              element={<Login sessionToken={sessionToken} updateToken={updateToken} />}
            />
            <Route
              path="/choreindex"
              element={
                <ChoreIndex
                sessionToken={sessionToken}
                  updateToken={updateToken}
                  
                />
              }
            />
            <Route
              path="/chorecreate"
              element={
                <ChoreCreate
                  updateToken={updateToken}
                  sessionToken={sessionToken}
                />
              }
            />
            <Route
              path="/choretable"
              element={
                <ChoreTable
                  updateToken={updateToken}
                  sessionToken={sessionToken}
                />
              }
              
            />
          </Routes>
          <HomePage />
          <ContactPage />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
