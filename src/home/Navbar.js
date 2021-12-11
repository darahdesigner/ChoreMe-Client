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
          <h1 className="logo">ChoreMe</h1>
          <Link to='/login'><button className="logoutbtn" type="submit">
            Login
          </button></Link>
          <button
            className="logoutbtn"
            type="submit"
            onClick={props.clickLogout}
          >
            Logout
          </button>
        </Content>
      </Main>
    </div>
  );
};

export default TopNav;
