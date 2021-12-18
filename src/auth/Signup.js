import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import APIURL from "../helpers/enviroment";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    let statusCode;

    fetch(`${APIURL}/user/register`, {
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

        if (statusCode === 500) {
          setErrorMessage("Email is already in use");

          console.log(errorMessage);
        }

        return response.json();
      })
      .then((data) => {
        props.updateToken(data.sessionToken);
        if (statusCode === 201) navigate("/choreindex");
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
            <h1 className="title">Sign up for your free account</h1>
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
              Create Account
            </Button>
            <p className="AlreadyUser">
              Already a user? Login
              <span className="link">
                <Link className="alink" to="/login">
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

export default Signup;