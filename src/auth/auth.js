import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {

  return (
    <div className="auth">
  <Signup updateToken={props.updateToken}/>
    </div>
  );
};

export default Auth;
