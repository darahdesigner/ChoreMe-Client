import React, { useState, useEffect } from "react";
// import { Container, Col } from "reactstrap";
import ChoreCreate from "./ChoreCreate";
import ChoreTable from "./ChoreTable";
import ChoreEdit from "./ChoreEdit";
import "../App.css";
import APIURL from "../helpers/enviroment";

const ChoreIndex = (props) => {
  const [chores, setChores] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [choreToUpdate, setChoreToUpdate] = useState({});

  const editUpdateChore = (chore) => {
    setChoreToUpdate(chore);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchChores = () => {
      fetch(`${APIURL}/chore`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        // Authorization: `Bearer ${props.sessionToken}`,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        console.log(choreData)
        setChores(choreData);
      }).catch (err => {
        console.log(err);
      })
  };

  useEffect(() => {

    console.log('log from useEffect')
    fetchChores();
  }, []);

  return (
    <div className="chorecon">
      <h1>{chores.title}</h1>
      <div className="createchores">
        <div className="choreStyle">
          <ChoreCreate
            sessionToken={props.sessionToken}
            fetchChores={fetchChores}
            
          />
          <ChoreTable
            sessionToken={props.sessionToken}
            chores={chores}
            editUpdateChore={editUpdateChore}
            updateOn={updateOn}
            fetchChores={fetchChores}
          />
          {updateActive ? (
            <ChoreEdit
              sessionToken={props.sessionToken}
              choreToUpdate={choreToUpdate}
              updateOff={updateOff}
              fetchChores={fetchChores}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoreIndex;