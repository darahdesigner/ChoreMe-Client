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
import APIURL from '../helpers/enviroment';

const ChoreEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.choreToUpdate.description);
  const [editTit, setEditTit] = useState(props.choreToUpdate.title);
  const [editAmo, setEditAmo] = useState(props.choreToUpdate.amount);
  const [editDead, setEditDead] = useState(props.choreToUpdate.deadline);
  const [editAssign, setEditAssign] = useState(props.choreToUpdate.assign);
  const [editComplete, setEditComplete] = useState(props.choreToUpdate.complete);

  const choreUpdate = (event, chore) => {
    event.preventDefault();
    fetch(`${APIURL}/chore/${props.choreToUpdate.id}`, {
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
    <Modal className='updateMainBox' isOpen={true}>
      <ModalHeader className='updateTitle'>Update a Chore</ModalHeader>
      <ModalBody >
        <Form className='updateBody' onSubmit={choreUpdate}>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="title">Edit Title:</Label>
            <Input
              name="title"
              value={editTit}
              onChange={(e) => setEditTit(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="description">Edit Description:</Label>
            <Input
              name="description"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="amount">Edit Amount:</Label>
            <Input
            type='number'
              name="amount"
              value={editAmo}
              onChange={(e) => setEditAmo(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="deadline">Edit Deadline:</Label>
            <Input
            type='date'
              name="deadline"
              value={editDead}
              onChange={(e) => setEditDead(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="assign">Edit Assigned:</Label>
            <Input
              name="assign"
              value={editAssign}
              onChange={(e) => setEditAssign(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label className='chorelabelsAssign' htmlFor="complete">Edit Completion:</Label>
            <Input
              onChange={(e) => setEditComplete(e.target.value)}
              name="complete"
              type="select"
              value={editComplete}
            >
              <option value="Complete">Complete</option>
              <option value="NotComplete">Not Complete</option>
              <option value="Progress">In Progress</option>
            </Input>
          </FormGroup>
          <div className='buttonStyle2'>
          <Button className="updateBtn" type="submit">Update</Button></div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ChoreEdit;
