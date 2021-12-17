import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";
import Signup from "./Signup";


const Auth = (props) => {

  return (
    <div className="auth">
      <body className="auth">
  <Signup updateToken={props.updateToken}/>
  </body>
   </div>
  );
};

export default Auth;
