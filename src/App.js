import React from 'react';
import TransactionContainer from './components/TransactionContainer'
import Search from './components/Search'
import NewTransaction from './components/NewTransaction'

class App extends React.Component {

   state = {
    transactions: [],
    searchTerm : ''
   }  

   componentDitMount() {
     fetch(`http://localhost:4000/transactions`)
     .then(r => r.json())
     .then(transactionsArr => {
       console.log(transactionsArr)

       this.setState({
         transactions: transactionsArr
       })
     }
     )}
     
     handleInput = (theSearchTermTyped) => {
       this.setState ({
         searchTerm: theSearchTermTyped
       })
     }

  render(){
    return (
      <div className="ui raised segment">
         <div className="ui segment violet inverted">
           <h2>The Royal Bank of Flatiron</h2>
         </div>

         <Search handleInput ={this.handleInput} />
         <TransactionContainer transactions= {this.state.transactions}/>
         <NewTransaction />

     </div>
    )
  }

}

export default App;
