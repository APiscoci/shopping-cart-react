# Shopping Cart React

Simple React Shopping Cart that can add or remove products to the shopping basket and provide a total cost of the shopping basket.

## Requirements

* Given I have selected to add an item to the basket Then the item should be added to the basket.
* Given items have been added to the basket Then the total cost of the basket should be calculated.
* Given I have added a multiple of 3 lots of item 'B' to the basket Then a promotion of '3 for 40' should be applied to evey multiple of 3. 
* Given I have added multiple of 1 lots of item 'D' to the basket Then a promotion of '25% off' should be applied to every multiple of 2. 

### Grid 1
 
Item SKU  | Unit Price  | Promotions           |
----------|-------------|----------------------|
A         | 10          |                      |
B         | 15          | 3 for 40             |
C         | 40          |                      |
D         | 55          | 25% off for every 2  |

The promotions can affect the total price of the basket, for example, when 3 lots of item 'D' are added to the basket then a 25% deduction is applied to the total cost of 2 of those items.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
