import React, { useState } from "react";
import { Button, Input, FormGroup, Form } from "reactstrap";
import "../App.css";
import APIURL from '../helpers/enviroment';

const ChoreTable = (props) => {
  const [assign, setAssign] = useState("");
  const [byName, setByName] = useState("");
  const [mine, setMine] = useState('');

  const deleteChore = (chore) => {
    fetch(`${APIURL}/chore/${chore.id}`, {
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
        <div className="historymain" >
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
    fetch(`${APIURL}/chore/${byName}`, {
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
        // props.fetchChores();
      });
  };

  const handleMine = async (e) => {
    e.preventDefault();
    await fetch(`${APIURL}/chore/mine/:owner_id`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        setMine(choreData)
        console.log(choreData);
        console.log(mine)
        // props.fetchChores();
      });
  };

  const nameMapper = () => {
    return assign.map((assign, index) => {
      return (
        <div className="historymain" key={index}>
          <div className="historybox">
            <div className='titleAlign'>
            <div key={assign.id} className="cTitle">
              {assign.title}
            </div>
            </div>
            <div className='choreitems'>
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


  const mineMapper = () => {
    return mine.map((mine, index) => {
      return (
        <div className="historymain" key={index}>
          <div className="historybox">
            <div className='titleAlign'>
            <div key='{mine.id}' className="cTitle">
              {mine.title}
            </div>
            </div>
            <div className='choreitems'>
            <div key="{description}" className="cDescription">
              Description:
              <span className="chorecontent"> {mine.description}</span>
            </div>
            <div key="{amount}" className="cAmount">
              Amount: <span className="chorecontent">{mine.amount}</span>
            </div>
            <div key="{deadline}" className="cDeadline">
              Deadline: <span className="chorecontent">{mine.deadline}</span>
            </div>
            <div key="{assign}" className="cAssign">
              Assigned To: <span className="chorecontent">{mine.assign}</span>
            </div>
            <div key="{complete}" className="cComplete">
              Complete?: <span className="chorecontent">{mine.complete}</span>
            </div>
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
      <div className='filterBox'>
      <Form onSubmit={handleSearch}>
        <FormGroup className="nameSearchBox">
          <h3 className='searchTitle'>Search by assigned:</h3>
          <Input
            placeholder='Enter a name'
            className='searchInput'
            type="text"
            onChange={(e) => setByName(e.target.value)}
            name="byName"
            value={byName}
          />
          <Button className='searchBtn' type="submit">Search</Button>
        </FormGroup>
        
      </Form>
      <Form onSubmit={handleMine}><Button className='mineBtn' type='submit'>Get My Chores</Button></Form>
      <p className='payTitle'>Current Amount Paid:</p>
      </div>
      <h3 className="historytitle">Chore History</h3>
      <div className="cTable">
        {assign !== '' ? <div className="choreCards">{nameMapper()}</div> : <div className="choreCards"></div>}
        {mine !== '' ? <div className="choreCards">{mineMapper()}</div> : <div></div>}
      </div>
    </div>
  );
};

export default ChoreTable;
