import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../configs/axios';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    interval: 'Weekly', // Default interval
  });

  // Use state to store the token
  const [storedToken, setStoredToken] = useState('');

  useEffect(() => {
    // Check if we are on the client side before accessing localStorage
    const token = window.localStorage.getItem('token');
    setStoredToken(token);
    console.log('token:', token);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ...

      const userData = { 
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        interval: product.interval,
      };

      const responseData = await axiosInstance({
        method: 'POST',
        url: '/api/products/products',
        data: userData,
        // Add the token to the headers
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });


      if (responseData.status === 201) {
        
        console.log('Product created successfully:', responseData);
        // You can redirect or handle success as needed
      } else {
        console.error('Error creating product:', responseData);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Interval:
          <select
            name="interval"
            value={product.interval}
            onChange={handleChange}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
