# Customer Relations Management Project

## Preview


## Development Order



### 1. Start a React project: npx create-react-app my-app


### 2. Create the customer component:
 * components > Create Customer.js


### 3. Design the customer table by applying Material UI
 * npm install @material-ui/core @material-icons


### 4. Build a Node.js Express server development environment
 * npm install -g nodemon
 * npm install body-parser express
 * npm install concurrently --save
 * npm install --save-dev http-proxy-middleware
 * src > create setupProxy.js

```
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      changeOrigin: true,
      secure: false,
    })
  );
};
```


 -- body-parcer: Middleware of Node.js
 -- express: Fast, unopinionated, minimalist web framework
 -- nodemon: Simple monitor script for use during development of a Node.js app
 -- concurrently: Run command client & server concurrently
 -- http-proxy-middleware: The one-liner node.js proxy middleware for connect, express and browser-sync


### 5. Implement REST API in Node.js Express


 ```
class App extends Component {
 // can be changed == useState
  state = {
    customers: "",
    completed: 0
  }

// Access to API server and get data
  componentDidMount() {
    this.callApi()
     // Put the data received from callApi into res
     // put it in the value of a variable called state through customers: res
      .then(res => this.setState({ customers: res }))
  }

// Enter the API address to access and receive data
  callApi = async() => {
    const response = await fetch('/api/customers')
    const body = await response.json(); // put the data into a variable called body
    return body;
  }
```


### 6. Implementing React's Lifecycle and API Loading Handling
 * import CircularProgress from '@material-ui/core/CircularProgress'


### 7. Build MySQL DB using AWS RDS service
 * To store, view and modify customer data
 * Free with free tier => https://aws.amazon.com/console/


### 8. Build Customer DB table using HeidiSQL and link with Express
 * npm install --save mysql: For interworking between Node.js and MySQL
 * Available for free => https://www.heidisql.com/


### 9. Customer Add Form & Events Handling
 * cd client > npm install --save axios
 * Transfer data received through Customer Add Form to '/api/customers' using handleFormSubmit function


 -- axios: Promise based HTTP client for the browser and node.js, automatically change req, res (reply) to JSON format


### 10. Process file upload request in Node.js Express and insert data into DB
 * npm install --save multer


 -- multer: Middleware for handling `multipart/form-data. ex) Profile image data


### 11. Implement customer data deletion function
 * components > Create CustomerDelete.js file
 * Create a function that sends the id value to be deleted to the url -> Create a delete module in the Node.js server


### 12. Implementing Material UI Modal design




## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
