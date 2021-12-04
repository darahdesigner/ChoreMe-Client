import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ChoreCreate from "./ChoreCreate";
import ChoreTable from "./ChoreTable";
import ChoreEdit from "./ChoreEdit";

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
    fetch("http://localhost:3000/chore", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((choreData) => {
        setChores(choreData);
      });
  };

  useEffect(() => {
    fetchChores();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <ChoreCreate fetchChores={fetchChores} token={props.token} />
        </Col>
        <Col md="9">
          <ChoreTable
            chores={chores}
            editUpdateChore={editUpdateChore}
            updateOn={updateOn}
            fetchChores={fetchChores}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <ChoreEdit
            choreToUpdate={choreToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchChores={fetchChores}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default ChoreIndex;