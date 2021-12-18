import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import APIURL from "../helpers/enviroment";

const ChoreCreate = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assign, setAssign] = useState("");
  const [complete, setComplete] = useState("");

  const handleSubmit = (e) => {
    console.log(props.sessionToken);
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
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        //console.log(choreData);
        setDescription("");
        setTitle("");
        setAmount("");
        setDeadline("");
        setAssign("");
        setComplete("");

        props.fetchChores();
      });

      let newDeadline = new Deadline(deadline.registered.date).toString().substring(4,15); //separated new & Deadline in delcaration - DS
      const Deadline = arr => arr.map((sum => value => sum += value)(0));
     

  };
  return (
    <div className="choretable">
      <Form className="choreform" onSubmit={handleSubmit}>
        <div className="createbox">
          <h3 className="createtitle">Create a chore</h3>
          <FormGroup className="formstyleTitle">
            <Label htmlFor="title" />
            <h3 className="chorelabels">Title:</h3>
            <Input
            required
            placeholder='Name the chore'
              className="createInputsTitle"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              value={title}
            ></Input>
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="description" />
            <h3 className="chorelabelsDesc">Description:</h3>
            <textarea
            required
            placeholder='Description of the chore'
              className="createInputsDesc"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </FormGroup>
          <div className='inputStack'>
          <FormGroup className="formstyle">
            <Label htmlFor="assign" />
            <h3 className="chorelabelsAssign">Assign:</h3>
            <Input
              placeholder='Enter a name'
              className="createInputsAssign"
              onChange={(e) => setAssign(e.target.value)}
              name="assign"
              value={assign}
            />
          </FormGroup>
          <FormGroup className="formstyle">
            <Label htmlFor="amount" />
            <h3 className="chorelabelsAmount">Amount:</h3>
            <Input
            placeholder='0.00'
              className="createInputsAmount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
              value={amount}
            />
          </FormGroup>
          </div>
          <div className='inputStack2'>
          <FormGroup className="formstyle">
            <Label htmlFor="deadline" />
            <h3 className="chorelabels">
              Deadline:
            </h3>
            <Input
              className="createInputsDeadline"
              type="date"
              value="2021-12-22"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              

            />
          </FormGroup>
          
          <FormGroup className="formstyle">
            <Label htmlFor="complete" />
            <h3 className="chorelabelsComplete">Complete?:</h3>
            <Input
              className="createInputsComplete"
              onChange={(e) => setComplete(e.target.value)}
              name="complete"
              type="select"
              value={complete}
            >
              <option value="Complete">Complete</option>
              <option value="Not Complete">Not Complete</option>
              <option value="In Progress">In Progress</option>
            </Input>
          </FormGroup>
          </div>
          <Button className="createbtn" type="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChoreCreate;
