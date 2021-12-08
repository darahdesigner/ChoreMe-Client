import React from "react";
import { Table, Button } from "reactstrap";
import "../App.css";
import APIURL from "../helpers/environment";

const ChoreTable = (props) => {
  const deleteChore = (chore) => {
    fetch(`${APIURL}/chore/${chore.id}`, {
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
    <div className="chorehistorybox">
      <h3 className="historytitle">Chore History</h3>
      <Table>
        <tbody>{choreMapper()}</tbody>
      </Table>
    </div>
  );
};

export default ChoreTable;
