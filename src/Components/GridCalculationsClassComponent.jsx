import React, { Component } from 'react';

export default class GridCalculationsClassComponent extends Component {
  state = {
    pageTitle: "Class Components Products",
    products: [
      {
        id: 1,
        name: "Shirts",
        price: 5.00,
        quantity: 1,
      },
      {
        id: 2,
        name: "Pant",
        price: 15.00,
        quantity: 2,
      },
      {
        id: 3,
        name: "Detergent",
        price: 25.00,
        quantity: 3,
      },
    ],
  };

  // Update product price or quantity
  updateValue = (evt, i) => {
    let arr = [...this.state.products]; // Create a copy of the products array
    const { name, value } = evt.target;

    // Parse the value to a float for price or keep it as a string for quantity
    if (name === 'price') {
      arr[i][name] = parseFloat(value) || 0; // Ensure a valid float or 0 if empty
    } else {
      arr[i][name] = value; // Quantity stays as string for now
    }
    
    this.setState({ products: arr });
  };

  // Calculate the total price of all products
  getTotalPrice = () => {
    return this.state.products.reduce(
      (total, product) => total + (product.price * product.quantity),
      0
    );
  };

  // Render each product row
  getProductRow = () => {
    return this.state.products.map((product, index) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>
          <input
            name="price"
            style={{ width: "100px" }}
            type="number" // Use number type for price input
            onChange={(evt) => this.updateValue(evt, index)}
            value={product.price.toFixed(2)} // Display the float value
          />
        </td>
        <td>
          <input
            name="quantity"
            style={{ width: "100px" }}
            type="number" // Use number type for quantity input
            onChange={(evt) => this.updateValue(evt, index)}
            value={product.quantity} // Keep quantity as string
          />
        </td>
        <td>{(product.price * product.quantity).toFixed(2)}</td> {/* Show calculated net price */}
      </tr>
    ));
  };

  render() {
    return (
      <>
        <div className="products ">
          <h4>
            <span className="">{this.state.pageTitle}</span>
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Net Price</th>
              </tr>
            </thead>
            <tbody>
              {this.getProductRow()}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="total">Total:</td>
                <td className="total">
                  {this.getTotalPrice().toFixed(2)} {/* Show total with 2 decimals */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
