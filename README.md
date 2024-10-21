Product Grid Calculations
This is a simple React application for managing and calculating the total price of products based on their price and quantity. The user can update the price and quantity of each product, and the total price will be dynamically calculated.

Features
Display a list of products with the ability to modify their price and quantity.
Automatically calculate the net price for each product based on the price and quantity.
Calculate and display the total price of all products.
Inputs for price and quantity are validated as numbers.
The application handles floating-point numbers correctly and displays values with two decimal points for better readability.
Installation
To set up this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/sandeeppaldotnet/product-grid-calculations.git
Navigate into the project directory:

bash
Copy code
cd product-grid-calculations
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Visit http://localhost:3000 in your browser to view the application.

Usage
Editing Products:
Modify the price and quantity of any product by entering new values in the respective fields.
The net price for each product (calculated as price * quantity) is updated in real-time.
Total Price:
The total price of all products is automatically calculated and displayed at the bottom of the table.
Code Structure
GridCalculations.js: Main React component that renders the product grid and handles state changes.
products: Array of product objects stored in the component's state. Each product has an id, name, price, and quantity.
updateValue: Updates the price or quantity of a product when the user changes the input fields.
getTotalPrice: Calculates the total price of all products.
getProductRow: Renders each product row dynamically.
Demo

Note: Replace this with a real screenshot of your project.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
