import React, { Component } from 'react';

class Transaction extends Component {

  render() {
    let {posted_at, description, category, amount} = this.props.transactionObjects
    return (
      <tr className={""}>
        <td>{posted_at}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    );
  }

}

export default Transaction;
