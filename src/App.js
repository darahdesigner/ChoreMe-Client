import React, { useState, useEffect } from "react";
import TopNav from "./home/Navbar";
import "./App.css";
import HomePage from "./home/home";
import Showcase from "./Showcase";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ChoreIndex from "./chores/ChoreIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChoreCreate from "./chores/ChoreCreate";
import ChoreTable from "./chores/ChoreTable";
import ChoreEdit from "./chores/ChoreEdit";

// import ContactPage from "./Contact/contactWill";
// import Footer from "./Elements/footer"
// import Will from "./Contact/contactWill";
// import Ebone from "./Contact/contactEbone"
// import Darah from "./Contact/contactDarah"


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
          <Route path="/" element={<HomePage sessionToken={sessionToken} updateToken={updateToken} />} />
            <Route path="/showcase" element={<Showcase sessionToken={sessionToken} updateToken={updateToken} />} />
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
              {/* <Route
              path="/choreedit"
              element={
                <ChoreEdit
                  updateToken={updateToken}
                  sessionToken={sessionToken}
                />
              }
            /> */}
          
          
          </Routes>
        </div>
        {/* <ContactPage />
          <Footer />
          <Will />
          <Ebone />
          <Darah /> */}
        {/* <HomePage /> */}
      </Router>
    </>
  );
}

export default App;