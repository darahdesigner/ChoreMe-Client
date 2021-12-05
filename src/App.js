import React, {useState, useEffect} from "react";
import TopNav from "./home/Navbar";
import "./App.css";
import Auth from "./auth/auth";
import Signup from "./auth/Signup";
import ChoreIndex from "./chores/ChoreIndex";




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
    console.log('User has logged in!');
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };
  
  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <ChoreIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <TopNav clickLogout={clearToken}></TopNav>
      {protectedViews()}
    </div>
  );
}

export default App;
