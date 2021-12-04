import React, { useState } from "react";
import styled from "styled-components";

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
  background-color: gray;
`;

const Logo = styled.h1`
position: absolute;
left: 0;
margin-left: 100px;
letter-spacing: 5px;
`;

const TopNav = (props) => {
  return (
    <div>
      <Main className="main">
        <Content className="content">
          <Logo>ChoreMe</Logo>
          <Button>Login</Button>
          <button type='submit' onClick={props.clickLogout}>Logout</button>
        </Content>
      </Main>
    </div>
  );
};

export default TopNav;
