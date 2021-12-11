import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, navigate, useNavigate } from "react-router-dom";
import "../App.css";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleSubmit = (event) => {
    let statusCode;
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
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((data) => {
        props.updateToken(data.sessionToken);
        if (statusCode == '201') navigate('/choreindex')
      });
  };

  return (
    <div className="auth">
      <h1 className="signupline">
        Create and organize your chores in one easy place!
      </h1>
      <div className="authcon">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="formgroups">
            <h1 className="title">Sign up for your free account.</h1>
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
              Create Account
            </Button>
            <p className="AlreadyUser">
              Already a user? Login
              <span className="link">
                <Link to="/login">here</Link>
              </span>
              !
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
