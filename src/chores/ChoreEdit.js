import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const ChoreEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.choreToUpdate.description);
  const [editTit, setEditTit] = useState(props.choreToUpdate.title);
  const [editAmo, setEditAmo] = useState(props.choreToUpdate.amount);
  const [editDead, setEditDead] = useState(props.choreToUpdate.deadline);
  const [editAssign, setEditAssign] = useState(props.choreToUpdate.assign);
  const [editComplete, setEditComplete] = useState(props.choreToUpdate.complete);

  const choreUpdate = (event, chore) => {
    event.preventDefault();
    fetch(`http://localhost:3000/chore/${props.choreToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        chore: {
          title: editTit,
          description: editDesc,
          amount: editAmo,
          deadline: editDead,
          assign: editAssign,
          complete: editComplete,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    }).then((res) => {
      props.fetchChores();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader>Log a Chore</ModalHeader>
      <ModalBody>
        <Form onSubmit={choreUpdate}>
          <FormGroup>
            <Label htmlFor="title">Edit Title:</Label>
            <Input
              name="title"
              value={editTit}
              onChange={(e) => setEditTit(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Description:</Label>
            <Input
              name="description"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Edit Amount:</Label>
            <Input
              name="amount"
              value={editAmo}
              onChange={(e) => setEditAmo(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadline">Edit Deadline:</Label>
            <Input
              name="deadline"
              value={editDead}
              onChange={(e) => setEditDead(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="assign">Edit Assigned:</Label>
            <Input
              name="assign"
              value={editAssign}
              onChange={(e) => setEditAssign(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="complete">Edit Completion:</Label>
            <Input
              name="complete"
              value={editComplete}
              onChange={(e) => setEditComplete(e.target.value)}
            ></Input>
          </FormGroup>

          <Button type="submit">Update the chore!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ChoreEdit;
