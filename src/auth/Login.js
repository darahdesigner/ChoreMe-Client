import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import APIURL from "../helpers/enviroment";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = (event) => {
    let statusCode;
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
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
        if (statusCode == 401) {
          setErrorMessage("Incorrect email or password");
          console.log(errorMessage);
        } else if (statusCode == 500) {
          setErrorMessage("Internal error, try again later");
        }
        return response.json();
      })
      .then((data) => {
        console.log(errorMessage);
        props.updateToken(data.sessionToken);
        if (statusCode == 200) navigate("/choreindex");
      });
  };
  return (
    <div className="auth">
      <h1 className="signupline">Welcome back!</h1>
      <div className="authcon">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="formgroups">
            <h1 className="title">Login to your account</h1>
            {errorMessage !== "" ? (
              <p className="errorMessage">{errorMessage}</p>
            ) : (
              ""
            )}
            <FormGroup>
              <Label className="user" htmlFor="username">
                Email:
              </Label>
              <Input
                required
                type="email"
                placeholder="Enter an email"
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
                required
                type="password"
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
              <span>
                <Link className="alink" to="/signup">
                  here
                </Link>
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
