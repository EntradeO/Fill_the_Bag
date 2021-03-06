## FILL THE BAG
### SISTEM FOR ADDING PRODUCTS TO THE SHOPPING CART FOR WANU APP

![alt-text](https://github.com/EntradeO/Fill_the_Bag/blob/master/src/img/Screenshot.png "Screenshot")

WANU is the prototype of a web app designed to transform the classic paper menu into a 2.0 menu,<br>
the APP allows the customer to order directly from his smartphone with a simple click

Site's link:[Wanu_App](https://wanu.netlify.com)
Repository's link:[GitHub-Wanu_App](https://github.com/EntradeO/wanu_app4.0)

In this documentation I will illustrate the realization of the material component.

-------------------------------------------------------------------------------------------

### USED TECHNOLOGY

For the development of this project it was decided to use REACT for the frontend part and STRAPI for the backend part.

--------------------------------------------------------------------------------------------

### START

Create a folder and follow the steps:

Install REACT:

`npx create-react-app [nome dell'app]`<br>
`cd my-app`<br>
`npm start`

for more details:(https://reactjs.org/)

Install the library inside the ** React ** folder [Node-SASS](https://www.google.com):

`npm install node-sass`

Install STRAPI:

`npm install strapi@beta -g`

then create the new database

`strapi new cms --quickstart`

for more details:(https://strapi.io/)

Install the following plugin in the React for call to API STRAPI recommends

`npm i axios`

If both steps are successful you are ready to download and configure the component that will take care of the rental system.

--------------------------------------------------------------------------------

### CONFIGURE STRAPI BACKEND

Enter Strapi and add Categories and Products under Content Type Builder and filling them with the following fields.

![alt-text](https://github.com/EntradeO/Fill_the_Bag/blob/master/src/img/tabella4.png)

![alt-text](https://github.com/EntradeO/Fill_the_Bag/blob/master/src/img/Tabella1.png)

Open Roles and Permission and set accessibility in *Public section all

![alt-text](https://github.com/EntradeO/Fill_the_Bag/blob/master/src/img/tabella3.png)

Create some table in Products and FILL THE BAG will be ready.

![alt-text](https://github.com/EntradeO/Fill_the_Bag/blob/master/src/img/Tabella2.png)

---------------------------------------------------










This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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