# Search-Engine Application with React.js (easy)

You are implementing a search-engine application for your new store owner client. Colleague of yours already implemented some of the functionalities that the client requested but he is on holiday now so you have to help finish it up and meet the deadline.

Missing functionalities are:

* Search field that allows user to input a query that will be matched against every product attribute (excluding price)
* Case of the input query does not matter
* ID is matched if query value equals to it
* Other fields can contain searched query, they don't have to be a match
* Filter fields allow user to put the range a price can be inside
* If user provides only starting price, product price should be inside [startPrice, infinity] interval, or if he provides ending price only, the interval is [0, endPrice]
* User sees filtered or searched products in a table

You are expected to implement:

* From `products.json` inside /src/assets/ folder import products that will be used for search/filter
* Put the data you get in `products` array in Search.js component state
* Implement search functionality by adding a handler to input change in SearchForm.js
* Pass query from Search.js to SearchForm.js component and make it visible in input field
* Implement handler for submitting search form and change `displayedProducts` to contain elements that contain search query that was passed in input
* Pass `displayedProducts` to ProductList.js component
* Show each item from the passed prop in the table inside ProductList.js component
* Pass `from` and `to` attributes to FilterForm.js component as props
* Implement change input and submit form handlers in FilterForm.js component
* Change `displayedProducts` to contain only products that have price in the range specified

# Input Validation
* If search query is empty or starting price is higher than ending price whole list should be shown

For more details please run task inside devskiller and see failing tests.

## Setup
1. `npm install` to get dependencies
2. Start app with `npm run start` and point webbrowser to `http://localhost:8080/`
3. Use `npm run test:unit` to see tests failing
4. Fix issues so that tests pass
5. Solve all issues mentioned here
6. Submit your code on Devskiller platform to see if task is completed

## Good Luck!