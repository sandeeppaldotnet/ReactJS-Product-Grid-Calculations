import React, { useState } from 'react';
 const GridCalculationsFuncationlComponents=()=>
{
    const [pageTitle, setPageTitle]=useState('Funcational Components Products');
    const [products, setProducts] = useState([

        { id: 1, name: 'Deshi Ghee', price: 50, quantity: 1 },
      
        { id: 2, name: 'Tea', price: 15, quantity: 2 },
      
        { id: 3, name: 'Sugar', price: 25, quantity: 3 },
      
      ]);
      const updateValue = (evt, i) => {
        let arr = [...products]; // Create a copy of the products array
        const { name, value } = evt.target;
    
        // Parse the value to a float for price or keep it as a string for quantity
        if (name === 'price') {
          arr[i][name] = parseFloat(value) || 0; // Ensure a valid float or 0 if empty
        } else {
          arr[i][name] = value; // Quantity stays as string for now
        }
        setProducts(arr);
        
      };
      const getProductRow = () => {
        return products.map((product, index) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <input
                name="price"
                style={{ width: "100px" }}
                type="number" // Use number type for price input
                onChange={(evt) => updateValue(evt, index)}
                value={product.price.toFixed(2)} // Display the float value
              />
            </td>
            <td>
              <input
                name="quantity"
                style={{ width: "100px" }}
                type="number" // Use number type for quantity input
                onChange={(evt) => updateValue(evt, index)}
                value={product.quantity} // Keep quantity as string
              />
            </td>
            <td>{(product.price * product.quantity).toFixed(2)}</td> {/* Show calculated net price */}
          </tr>
        ));
      };
     const getTotalPrice = () => {
        return products.reduce(
          (total, product) => total + (product.price * product.quantity),
          0
        );
      };
      return (
        <>
          <div className="products ">
            <h4>
              <span className="">{pageTitle}</span>
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
                {getProductRow()}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="total">Total:</td>
                  <td className="total">
                    {getTotalPrice().toFixed(2)} {/* Show total with 2 decimals */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      );
}
export default GridCalculationsFuncationlComponents;
