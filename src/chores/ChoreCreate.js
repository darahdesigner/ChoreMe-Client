import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import APIURL from "../helpers/environment";
import { compareAsc, format } from 'date-fns'

const ChoreCreate = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assign, setAssign] = useState("");
  const [complete, setComplete] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/chore/`, {
      method: "POST",
      body: JSON.stringify({
        chore: {
          title: title,
          description: description,
          amount: amount,
          deadline: deadline,
          assign: assign,
          complete: complete,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        console.log(choreData);
        setDescription("");
        setTitle("");
        setAmount("");
        setDeadline("");
        setAssign("");
        setComplete("");

        props.fetchChores();
      });
  };

  return (
    <div className="choretable">
      <Form className="choreform" onSubmit={handleSubmit}>
        <div className="createbox">
          <h3 className='createtitle'>Create a chore</h3>
          <FormGroup className="formstyle">
            <Label htmlFor="title" />
            <h3 className='chorelabels'>Title:</h3>
            <Input
              className="createInputs"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              value={title}
            ></Input>
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="description" />
            <h3 className='chorelabels'>Description:</h3>
            <Input className="createInputs"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></Input>
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="amount" />
            <h3 className='chorelabels'>Amount:</h3>
            <Input className="createInputs"
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
              value={amount}
            />
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="deadline" />
            <h3 className='chorelabels'>Deadline:<span className='date'> (mm/dd/yyyy)</span></h3>
            <Input className="createInputs"
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              value={deadline}
            />
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="assign" />
            <h3 className='chorelabels'>Assigned To:</h3>
            <Input className="createInputs"
              onChange={(e) => setAssign(e.target.value)}
              name="assign"
              value={assign}
            />
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="complete" />
            <h3 className='chorelabels'>Complete?:</h3>
            <Input className="createInputs"
              onChange={(e) => setComplete(e.target.value)}
              name="complete"
              value={complete}
            />
          </FormGroup>
          <Button className='createbtn' type="submit">Create</Button>
        </div>
      </Form>
    </div>
  );
};

export default ChoreCreate;
