import React, { useState } from "react";
import { Button, Input, FormGroup, Form } from "reactstrap";
import "../App.css";

const ChoreTable = (props) => {
  const [assign, setAssign] = useState("");
  const [byName, setByName] = useState("");

  const deleteChore = (chore) => {
    fetch(`http://localhost:3000/chore/${chore.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    }).then(() => props.fetchChores());
  };

  const choreMapper = () => {
    return props.chores.map((chore, index) => {
      return (
        <div className="historymain" key={index}>
          <div className="historybox">
            <div key={chore.id} className="cTitle">
              {chore.title}
            </div>
            <div key="{description}" className="cDescription">
              Description:
              <span className="chorecontent"> {chore.description}</span>
            </div>
            <div key="{amount}" className="cAmount">
              Amount: <span className="chorecontent">{chore.amount}</span>
            </div>
            <div key="{deadline}" className="cDeadline">
              Deadline: <span className="chorecontent">{chore.deadline}</span>
            </div>
            <div key="{assign}" className="cAssign">
              Assigned To: <span className="chorecontent">{chore.assign}</span>
            </div>
            <div key="{complete}" className="cComplete">
              Complete?: <span className="chorecontent">{chore.complete}</span>
            </div>

            <div className="buttons">
              <Button
                className="buttonStyle"
                onClick={() => {
                  props.editUpdateChore(chore);
                  props.updateOn();
                }}
                color="warning"
              >
                Update
              </Button>
              <Button
                className="buttonStyle"
                onClick={() => {
                  deleteChore(chore);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/chore/${byName}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        setAssign(choreData)
        console.log(choreData);
        props.fetchChores();
      });
  };

  const nameMapper = () => {
    return assign.map((assign, index) => {
      return (
        <div className="historymain" key={index}>
          <div className="historybox">
            <div key={assign.id} className="cTitle">
              {assign.title}
            </div>
            <div key="{description}" className="cDescription">
              Description:
              <span className="chorecontent"> {assign.description}</span>
            </div>
            <div key="{amount}" className="cAmount">
              Amount: <span className="chorecontent">{assign.amount}</span>
            </div>
            <div key="{deadline}" className="cDeadline">
              Deadline: <span className="chorecontent">{assign.deadline}</span>
            </div>
            <div key="{assign}" className="cAssign">
              Assigned To: <span className="chorecontent">{assign.assign}</span>
            </div>
            <div key="{complete}" className="cComplete">
              Complete?: <span className="chorecontent">{assign.complete}</span>
            </div>

            <div className="buttons">
              <Button
                className="buttonStyle"
                onClick={() => {
                  props.editUpdateChore(assign);
                  props.updateOn();
                }}
                color="warning"
              >
                Update
              </Button>
              <Button
                className="buttonStyle"
                onClick={() => {
                  deleteChore(assign);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="chorehistorybox">
      <Form onSubmit={handleSearch}>
        <FormGroup>
          <Input
            type="text"
            onChange={(e) => setByName(e.target.value)}
            name="byName"
            value={byName}
          />
        </FormGroup>
        <Button type="submit">Search</Button>
      </Form>
      <h3 className="historytitle">Chore History</h3>
      <div className="cTable">
        {assign !== '' ? <div className="choreCards">{nameMapper()}</div> : <div className="choreCards">{choreMapper()}</div>}
        
        
      </div>
    </div>
  );
};

export default ChoreTable;
