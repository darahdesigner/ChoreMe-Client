import React, { useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ChoreCreate = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assign, setAssign] = useState("");
  const [complete, setComplete] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/chore/', {
          method: 'POST',
          body: JSON.stringify({chore: {title: title, description: description, amount: amount, deadline: deadline, assign: assign, complete: complete}}),
          headers: new Headers({
              'Content-Type' : 'application/json',
              'Authorization': `Bearer ${props.token}`
          })
      }).then((res) => res.json())
      .then((choreData) => {
          console.log(choreData);
          setDescription('');
          setTitle('');
          setAmount('');
          setDeadline('');
          setAssign('');
          setComplete('');

          props.fetchChores();
      })
  }

  return (
    <>
      <h3>Create a chore</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title" />
          <Input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description" />
          <Input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          >
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount" />
          <Input
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
            value={amount}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deadline" />
          <Input
            onChange={(e) => setDeadline(e.target.value)}
            name="deadline"
            value={deadline}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="assign" />
          <Input
            onChange={(e) => setAssign(e.target.value)}
            name="assign"
            value={assign}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="complete" />
          <Input
            onChange={(e) => setComplete(e.target.value)}
            name="complete"
            value={complete}
          />
        </FormGroup>
        
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

export default ChoreCreate;
