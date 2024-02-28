import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../configs/axios';
import { Router } from 'next/router';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    intervals: 'monthly', // Default interval
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = window.localStorage.getItem('token');

      const { name, description, image, price, intervals} = product;

      const responseData = await axiosInstance({
        method: 'POST',
        url: '/api/products/products',
        data: {
          name,
          description,
          image,
          price,
          intervals
        },
        headers: {
          Authorization: `${token}`,
        },
      });


      if (responseData.status === 201) {
        
        console.log('Product created successfully:', responseData);
        //Router.push('/');
      
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
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="annually">annually</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
