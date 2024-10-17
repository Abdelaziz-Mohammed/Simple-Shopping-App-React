
# Simple Shopping App - React

The **Simple Shopping App** is a straightforward application built with React.js, providing users with an interface to browse products, manage their shopping cart, and access an admin panel for managing product entries.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Folder Structure](#project-folder-structure)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Links](#links)
- [Author](#author)

## Technologies Used
- **React.js** – For building the user interface.
- **React Router** – For handling navigation.
- **Axios** – For handling HTTP requests.
- **Bootstrap** – For responsive styling and layout.
- **Font Awesome** – For icons.
- **JSON Server** – For simulating a REST API with a JSON file.

## Project Folder Structure
- **DB Folder**: Contains `db.json`, which serves as the mock database for product data.
- **src Folder**: Contains all React application files, including components, pages, layouts, and styles.

## Features
### User Interface:
- Browse a catalog of products.
- Add items to the shopping cart.
- View and manage the shopping cart before proceeding to checkout.

### Admin Features:
- Add new products.
- Edit existing products.
- Delete products from the catalog.

### Checkout:
- Review selected products and the total price before completing the purchase.

## Setup Instructions
To set up and run the application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Abdelaziz-Mohammed/Simple-Shopping-App-React.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run JSON Server:**
   In a terminal, run the following command to start the mock backend:
   ```bash
   npx json-server --watch DB/db.json --port 3001
   ```

4. **Start the React Application:**
   Open another terminal and run:
   ```bash
   npm start
   ```

5. **Access the Application:**
   - To view the mock data: Go to `http://localhost:3001/products`
   - To use the shopping app: Go to `http://localhost:3000`

## Links
- **GitHub Repository**: [Simple Shopping App - React](https://github.com/Abdelaziz-Mohammed/Simple-Shopping-App-React)

## Author
This project was created and developed by [**Eng: Abdelaziz Mohamed**].
