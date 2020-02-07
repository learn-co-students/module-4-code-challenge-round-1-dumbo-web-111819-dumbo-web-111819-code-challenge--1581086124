import React, { Component } from 'react';

class Transaction extends Component {

  render() {
    return (
      <tr className={""}>
        <td>{"Render the Time"}</td>
        <td>{"Render the Description"}</td>
        <td>{"Render the Category"}</td>
        <td>{"Render the Amount"}</td>
      </tr>
    );
  }

}

export default Transaction;
