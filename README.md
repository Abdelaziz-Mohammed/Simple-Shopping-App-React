
# Simple_Shopping_App_React
This is a simple shopping application built with React, allowing users to view a menu of products, manage a shopping cart, and access an admin panel for adding or editing products.

## Shopping App
Welcome to the Shopping App! 
This application allows users to browse a menu of products, add them to their shopping cart, and proceed to checkout. 
Admin users can also add, edit, and delete products.
This app is made by me at my react.js learning journey.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Folder Details](#project-folder-details)
- [Features](#features)
- [Setup](#setup)
- [Links](#links)
- [Auther](#auther)

## Technologies Used
- **React.js** - A JavaScript library for building user interfaces.
- **React Router** - For routing and navigation within the app.
- **Axios** - For making HTTP requests to the backend.
- **Bootstrap** - For responsive design and styling.
- **Font Awesome** - For icons.
- **JSON Server** - A simple way to create a RESTful API using a JSON file.

## Project Folder Details
- **DB Folder**: Contains db.json, which serves as the database for products.
- **src Folder**: Contains all the React application files, including components, pages, Layouts, and styles.

## Features
- **User Interface:**
  - Browse a menu of products.
  - Add products to the shopping cart.
  - View the shopping cart and proceed to checkout.
- **Admin Functionality:**
  - Add new products to the menu.
  - Edit existing products.
  - Delete products from the menu.
- **Checkout:**
  - Review selected items and their total price before finalizing the purchase.

## Setup
To run the application, follow these steps:
1. **Clone the Repository:**
    - $ git clone https://github.com/Abdelaziz-Mohammed/Simple-Shopping-App-React.git
2. **Install Dependencies:**
    - $ npm install
3. **Run JSON Server:**
    Open terminal and run:
    - $ npx json-server --watch DB\db.json --port 3001
4. **Start the React Application**: 
    In another terminal, run:
    - $ npm start
5. **Open the Application in Your Browser:**
    - To watch db.json:
    Go to http://localhost:3001/products in your web browser.
    - To watch the React App:
    Go to http://localhost:3000 in your browser.

## Links
- **GitHub Repository**: [Simple-Shopping-App-React](https://github.com/Abdelaziz-Mohammed/Simple-Shopping-App-React)

## Author
This project was created and developed by [Eng: Abdelaziz Mohamed].
