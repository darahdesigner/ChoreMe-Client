import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled from "styled-components";

const Main = styled.div`
  margin: 0;
`;

ReactDOM.render(
  <Main>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Main>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
