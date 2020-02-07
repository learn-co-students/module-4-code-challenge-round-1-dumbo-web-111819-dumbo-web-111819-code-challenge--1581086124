import React from 'react';
import Transaction from './Transaction'

class TransactionContainer extends React.Component {
  render(){
  let transactionObjects = this.props.transactions.map(transactionObj => <Transaction key={transactionObj.id} transaction={transactionObj}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {transactionObjects}
      </tbody>
    </table>
  )
}}

export default TransactionContainer;
