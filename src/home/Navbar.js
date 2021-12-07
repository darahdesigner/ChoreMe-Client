import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Button = styled.div`
  background: red;
  border: 1px solid black;
  margin-right: 100px;
  padding: 10px 20px 10px 20px;
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
          <h1 className='logo'>ChoreMe</h1>
          <button className='logoutbtn' type="submit">
            Login
          </button>
          <button className='logoutbtn' type="submit" onClick={props.clickLogout}>
            Logout
          </button>
        </Content>
      </Main>
    </div>
  );
};

export default TopNav;
