import React, { useState } from 'react';
import { axiosInstance } from '../../configs/axios';

const UpdateProduct = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price,
    intervals: product.intervals
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = window.localStorage.getItem('token');

      const { name, description, image, price, intervals} = updatedProduct;

      const responseData = await axiosInstance({
        method: 'PUT', 
        url: `/api/products/products/${product.id}`, 
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

      if (responseData.status === 200) {
        console.log('Product updated successfully:', responseData);
      } else {
        console.error('Error updating product:', responseData);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Interval:
          <select
            name="interval"
            value={updatedProduct.interval}
            onChange={handleChange}
          >
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="annually">annually</option>
          </select>
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
