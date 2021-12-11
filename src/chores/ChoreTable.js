import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const ChoreTable = (props) => {
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
        // <div className="historybox">
        <div className="historymain" key={index}>
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
      );
    });
  };
  return (
    <div className="chorehistorybox">
      <h3 className="historytitle">Chore History</h3>
      <div className="cTable">
        <div className="choreCards">{choreMapper()}</div>
      </div>
    </div>
  );
};

export default ChoreTable;
