import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleSubmit = (event) => {
    let statusCode;
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        statusCode = response.status;
        console.log(statusCode);
        return response.json();
      })
      .then((data) => {
        console.log(props.sessionToken);
        props.updateToken(data.sessionToken);
        if (statusCode !== '200') navigate("/choreindex");
      });
  };
  return (
    <div className="auth">
      <h1 className="signupline">Welcome back!</h1>
      <div className="authcon">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="formgroups">
            <h1 className="title">Login.</h1>
            <FormGroup>
              <Label className="user" htmlFor="username">
                Username:
              </Label>
              <Input
                placeholder="Enter a username"
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
                placeholder="Enter a password"
                className="signupInputs"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
              />
            </FormGroup>
            <Button className="signupbtn" type="submit">
              Login
            </Button>
            <p className="AlreadyUser">
              Haven't signed up yet? Signup
              <span className="link">
                <Link to="/signup">here</Link>
              </span>
              !
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
