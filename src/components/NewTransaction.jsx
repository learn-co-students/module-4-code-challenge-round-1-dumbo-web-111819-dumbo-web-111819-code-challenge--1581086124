import React, { Component } from 'react';

class NewTransaction extends Component {

  render() {
    return (
      <div className="ui segment">
        <h1>Log New Transaction</h1>

        <form className="ui form">
          <div className="fields">
            <div className="four wide field">
              <label>Posted At</label>
              <div className="ui input">

                <input type="text" placeholder="Posted At" name="posted_at" />

              </div>
            </div>
            <div className="four wide field">
              <label>Description</label>
              <div className="ui input">

                <input type="text" placeholder="Description" name="description" />

              </div>
            </div>
            <div className="four wide field">
              <label>Category</label>
              <div className="ui input">

                <input type="text" placeholder="Category" name="category" />

              </div>
            </div>
            <div className="four wide field">
              <label>Amount</label>
              <div className="ui input">

                <input type="text" placeholder="Amount" name="amount" />
                
              </div>
            </div>
          </div>
          <input type="submit" className="ui fluid button" value="Create Transaction"/>
        </form>
      </div>
    );
  }

}

export default NewTransaction;
