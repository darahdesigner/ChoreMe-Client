import React from "react";
import { Table, Button } from "reactstrap";

const ChoreTable = (props) => {
  const deleteChore = (chore) => {
    fetch(`http://localhost:3000/chore/${chore.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    }).then(() => props.fetchChores());
  };

  const choreMapper = () => {
    return props.chores.map((chore, index) => {
      return (
        <tr className="historymain" key={index}>
          <div className="historybox">
            <td>{chore.title}</td>
            <td>{chore.description}</td>
            <td>{chore.amount}</td>
            <td>{chore.deadline}</td>
            <td>{chore.assign}</td>
            <td>{chore.complete}</td>

            <td>
              <Button
                onClick={() => {
                  props.editUpdateChore(chore);
                  props.updateOn();
                }}
                color="warning"
              >
                Update
              </Button>
              <Button
                color="danger"
                onClick={() => {
                  deleteChore(chore);
                }}
              >
                Delete
              </Button>
            </td>
          </div>
        </tr>
      );
    });
  };
  return (
    <>
      <h3>Chore History</h3>
      <hr />
      <Table>
        {/* <thead>
                <tr>
                    
                    <th>Title</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Deadline</th>
                    <th>Assigned</th>
                    <th>Complete</th>
                </tr>
            </thead> */}
        <tbody>{choreMapper()}</tbody>
      </Table>
    </>
  );
};

export default ChoreTable;
