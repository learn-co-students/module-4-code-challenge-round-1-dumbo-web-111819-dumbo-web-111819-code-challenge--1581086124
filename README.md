# Royal Bank of Flatiron

For this project, you'll be building out a React application that displays a list of your recent bank transactions. In addition to displaying the information, the application will also be able to log new transactions as well as sort them, so you can see where your money is coming and going.

## Setup

In our React application, the data about your transactions is in the `db.json` file. To mimic an API, we'll need to fire up a `json-server` using the following command:

```
  json-server -p 4000 --watch db.json
```

This command will fire up a `json-server` at 'http://localhost:4000' and following RESTful conventions, the list of our transactions can be found at 'http://localhost:4000/transactions'.

After firing up our `json-server`, let's start our React application by running the following command:

```
  npm install && npm start
```

This command will download any Node Package we'll need as well as fire up our React server at 'http://localhost:3000'.

## Deliverables

1. When our React application is mounted, it should render out the list of transactions on the page, using the given Transaction component.

  a) The Transaction component is set up to receive 4 pieces of information from one transactions - the time at which the transaction was posted, the category, the amount and the description. Your job is to render all the information in the appropriate places.

  b) To make the interface of our application more clear, any transactions that are logged below zero dollars should have the class of "debt" and any transactions that are logged above zero dollars should have the class of "credit". This will add CSS to each of our table rows.

2. Once you have the list of transactions rendering, build out the Search functionality. As the user types in the Search component, we'll want to dynamically render the list of transactions whose _description_ or _category_ include the letters that are being typed. If there's no text in the Search component, all the transactions from the database should be showing on the page.

3. After working on the Search component, build out the functionality to log a new transaction. Right now, there's a NewTransaction component on the page that is not doing much. After the user submits the form, we want to see the information that they typed displayed at the bottom of the table. You do not have to persist the transaction to the database.

If you are finished with these three deliverables, commit your code.

```
  git add .
  git commit -m 'done'
```

4. After getting the form working, build out the functionality to have the new transaction persisted in the backend. Because `json-server` does not have any validations, if you accidentally create a transaction object whose structure does not match the ones who were already in the database, you can simply erase the object in the file.

5. After getting the information persisted, build out a feature to sort the list of transactions. In the Search component, there is an icon with the class of "circular search link icon". When the icon is clicked, the list of transactions should be sorted from least to greatest.
