import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div className="auth"><h1 className='signupline'>Welcome back!</h1>
      <div className="authcon">
        
        <Form className="form" onSubmit={handleSubmit}>
          <div className="formgroups">
            <h1 className="title">Login.</h1>
            <FormGroup>
              <Label className="user" htmlFor="username">
                Username:
              </Label>
              <Input
                placeholder='Enter a username'
                className="signupInputs"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label className="pass" htmlFor="password">
                Password:
              </Label>
              <Input
                placeholder='Enter a password'
                className="signupInputs"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
              />
            </FormGroup>
            <Button className="signupbtn" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;