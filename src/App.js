import React from 'react';
import TransactionContainer from './components/TransactionContainer'
import Search from './components/Search'
import NewTransaction from './components/NewTransaction'

class App extends React.Component {

  render(){
    return (
      <div className="ui raised segment">
         <div className="ui segment violet inverted">
           <h2>The Royal Bank of Flatiron</h2>
         </div>

         <Search />
         <TransactionContainer />
         <NewTransaction />

     </div>
    )
  }

}

export default App;
