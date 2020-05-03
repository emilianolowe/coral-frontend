This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Clean Code Assignment

The Coral Web App developed by Lourenço, Emiliano, Kanya, and Nadine.

## Single Responsibility Principle: 

The React component-based architecture was designed specifically to serve a single business logic for each component. We have used class components in React in order to use them across our application as needed. Each class component serves a single purpose and can be used again and again. Take a look at the `NavBar.js` file as an example of how we are implementing this principle in our code. 

## Open/Closed Principle: 

This is exactly what we're doing in our web app. We are creating components that we can extend for use in a variety of ways. We're importing our `ButtonCard` into the `HomePageCard` and modifying it with unique properties needed for the home page. We are not changing the `ButtonCard` itself, just its implementation.

## Liskov’s Substitution Principle: 

You can see Liskov’s Substitution Principle at play in the Coral Front End. It is possible to use any class that is the child of a parent class in place of its parent without any unexpected behavior. For example, we can use the `HomepageCard` in place of its parent the `ButtonCard` with no problems whatsoever. However, you cannot use the parent in place of the child, in other words, you cannot use the `ButtonCard` in place of the `HomepageCard.`

## Interface Segregation Principle: 

In our code, we do not force any client to implement an interface that is irrelevant to them. We split interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.

## Dependency Inversion Principle: 

If you look at our code carefully, you will see that high-level component classes do not depend on low-level component classes, instead they depend upon the abstractions such as the React components. Each of our functions does one thing and one thing only. Each function is written in terms of a single level of abstraction. Our dependencies are decoupled.