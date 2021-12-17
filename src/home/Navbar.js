import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Main = styled.div`
  height: 10vh;
  background-color: #e25c48;
`;

const TopNav = (props) => {
  return (
    <div>
      <Main className="main">
        <Content className="content">
          <Link className="logo" to='/'><h1 >ChoreMe</h1></Link>
          {props.sessionToken !== "" ? (
            ""
          ) : (
            <Link to="/login">
              <button className="logoutbtn" type="submit">
                Login
              </button>
            </Link>
          )}
          <Link to="/">
          {props.sessionToken !== "" ? (
            <Link to="/">
            <button onClick={props.clickLogout} className="logoutbtn" type="submit">
              Logout
            </button>
          </Link>
          ) : (
            <Link to="/signup">
              <button className="logoutbtn" type="submit">
                Signup
              </button>
            </Link>
          )}
          </Link>
        </Content>
      </Main>
    </div>
  );
};

export default TopNav;