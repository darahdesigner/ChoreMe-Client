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
            <td className='cTitle'>{chore.title}</td>
            <td className='cDescription'>Description:<span className='chorecontent'> {chore.description}</span></td>
            <td className='cAmount'>Amount: <span className='chorecontent'>{chore.amount}</span></td>
            <td className='cDeadline'>Deadline: <span className='chorecontent'>{chore.deadline}</span></td>
            <td className='cAssign'>Assigned To: <span className='chorecontent'>{chore.assign}</span></td>
            <td className='cComplete'>Complete?: <span className='chorecontent'>{chore.complete}</span></td>

            <td className='buttons'>
              <Button className="buttonStyle"
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
            </td>
          </div>
        </tr>
      );
    });
  };
  return (
    <div className="chorehistorybox">
      <h3 className="historytitle">Chore History</h3>
      <Table className='cTable'>
        <tbody className='choreCards'>{choreMapper()}</tbody>
      </Table>
    </div>
  );
};

export default ChoreTable;
