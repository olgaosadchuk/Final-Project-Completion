A link to the live site:    https://sage-hamster-6d2fd8.netlify.app/

This is a simple project that demonstrates a basic e-commerce website for kids' toys using React and Redux. The project consists of three main pages: HomePage, ToysPage, and CheckoutPage. It allows users to browse and add toys to their shopping cart and proceed to checkout.


Technologies Used

The project uses the following technologies:

-React: A JavaScript library for building user interfaces, providing a component-based architecture and a virtual DOM.
-Redux: A state management library for managing the application's state in a predictable way.
-React Router: A routing library for handling navigation between different pages in the application.


Approach

The project follows a front-end web development approach where React components are used to create reusable UI elements. Redux is utilized to manage the application's state, especially for the shopping cart functionality. React Router is used to set up and manage the navigation between different pages.

The key files and their functionalities are as follows:

1.App.js: This file sets up the main application and defines the routing using BrowserRouter and Routes. It maps different URLs to corresponding components (HomePage, ToysPage, CheckoutPage).

2.HomePage.js: This component represents the home page of the website. It displays a welcome message and a link to the ToysPage where users can browse the available toys.

3.ToysPage.js: This component displays the list of available toys fetched from the Redux store using the useSelector hook. Users can view toy details, add toys to the cart, and proceed to the checkout page.

4.CheckoutPage.js: This component displays the selected items in the cart along with the total price. Users can remove items from the cart, and there are links to navigate back to the HomePage or ToysPage.

5.store.js: This file configures the Redux store using configureStore and combines reducers. The primary reducer (toysReducer) is defined in the toysSlice.js file.

6.toysSlice.js: This file contains the Redux slice for managing the state related to toys and the shopping cart. It defines actions like addToCart and removeFromCart, and an asynchronous action fetchToys to fetch the toy data.


Usage Instructions

1.Clone the repository to your local machine.
2.Ensure you have Node.js and npm installed on your machine.
3.Open a terminal and navigate to the project folder.
4.Run npm install to install the required dependencies.
5.Run npm start to start the development server.
6.The application should automatically open in your default web browser at http://localhost:3000.
7.You can now browse the toys on the ToysPage, add items to the cart, and proceed to the CheckoutPage to review your selected toys.


Please note that this project is a basic demonstration of the features and does not include real backend functionality like payment processing. The focus is on showcasing React, Redux, and React Router concepts in a simple e-commerce setting.